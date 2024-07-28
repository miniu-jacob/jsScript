import { API_KEY } from './apikey.js';
import { NewsFetcher } from './newsFetcher.js';

const getNews = new NewsFetcher(API_KEY, 'kr', 100, 3000);
console.log('1. BaseURL: ', getNews.baseUrl)
console.log('2. sports category: ', getNews.getNewsUrl({ category: 'sports' }));
// console.log('sports category URL fetch: ', getNews.fetchNews({ category: 'sports'}))

// getNews.fetchNews({category: 'general'});

// 카테고리 버튼
document.querySelectorAll('.menus button').forEach(button => {
  button.addEventListener('click', () => {
    // console.log(button.textContent.toLocaleLowerCase())
    getNews.fetchNews({category: button.textContent.toLocaleLowerCase()})
  })
})

// 검색창 활성화 
const searchIcon = document.querySelector('.search-icon');
searchIcon.addEventListener('click', () => {
  const searchArea = document.querySelector('.search-area');
  const searchState = window.getComputedStyle(searchArea).display;
  searchArea.style.display = searchState === 'none' ? 'block' : 'none';
})

// 검색 창으로 검색
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', () => {
  let userInput = document.querySelector('.user-input');
  let userValue = userInput.value;
  getNews.fetchNews({query : userValue })
})

getNews.fetchNews({})