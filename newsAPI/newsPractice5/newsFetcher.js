import { API_KEY } from './apikey.js';

export class NewsFetcher {
  constructor(apiKey, country = 'kr', pageSize = 100, port = 3000) {
    this.apiKey = apiKey;
    this.country = country;
    this.pageSize = pageSize;
    this.port = port;
    this.baseUrl = `http://localhost:${port}/news`;
    this.newsList = [];
    this.newsHTML = '';
  }

  // URL 가져오기
  getNewsUrl(params) {
    const url = new URL(this.baseUrl);
    
    if (params.query) {
      url.searchParams.append('q', params.query);
    }

    if (params.category) {
      url.searchParams.append('category', params.category);
    }

    url.searchParams.append('country', this.country);
    url.searchParams.append('pageSize', this.pageSize);
    url.searchParams.append('apikey', this.apiKey);
    return url.toString();
  }
  
  async fetchNews(params) {
    try {
      // const url = new URL(params);
      // url 을 가져오는데 getNewsUrl에서 가져와야 한다. 
      const url = this.getNewsUrl(params);
      const response = await fetch(url);
      const data = await response.json();
      const articles = data.articles;
      this.updateNewsList(articles);
    } catch (error) {
      console.error(`Error: ${error.message}`)
    }
  } 
  
  updateNewsList(articles) {
    // console.log('articles list: ', articles) 
    this.newsList = articles.filter((item)=> item.urlToImage !== null )
    console.log('newsList with Image: ', this.newsList)
    this.render();
  }

  render() {
    console.log('그림')
    this.newsHTML = this.newsList.map((news) => `
      <div class="row align-items-center news">
            <div class="col-lg-4">
              <img class="news-image1" src="${news.urlToImage}" alt="image">
            </div>
            <div class="col-lg-8">
              <h4>${news.title}</h4>
              <p>${news.description}</p>
              <p>${news.author} * ${news.publishedAt}</p>
            </div>
          </div> 
    `).join('');
    document.querySelector('.news-area').innerHTML = this.newsHTML;
  }
}