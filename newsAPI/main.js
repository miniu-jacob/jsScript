import config from '../apikey.js';
const API_KEY = config.NEWS_API_KEY1;
// const API_KEY = process.env.NEWS_API_KEY1;
let newsList = [];
const categoryButtons = document.querySelectorAll('.menu-line button');
// console.log('category Buttons: ', categoryButtons);
//  array에 있는 버튼 하나하나에 클릭 이벤트 주기
// 이 때는 forEach() 를 사용할 수 있다.  map이랑 비슷한데 아이템 하나하나에 액션을 줄 수 있다.
//
categoryButtons.forEach((menu) =>
    menu.addEventListener('click', (event) => {
        getNewsByCategory(event);
    })
);

// 뉴스를 가지고 오는 함수 만들기
const getNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`;
    // javascript 는 개발자가 필요로 하는 많은 함수들을 제공해 준다.
    // 그중에 하나가 url 이다.
    // url 쿼리, 쿼리만 가지고 오는 작업을 이미 만들어 놓은 javascript를 사용할 수 있다.
    // 즉 url 에 필요한 함수와 변수들을 제공하는데 이때 new URL(); 와 같이 사용할 수 있다.
    // new URL() 에서 URL 과 같은 것을 인스턴스라 한다.

    // async: 비동기 처리를 하겠다.
    // const url = new URL(
    //     `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`
    // );
    console.log('API_KEY: ', API_KEY);
    const response = await fetch(url);
    // console.log('uuu', url);
    const data = await response.json();
    newsList = data.articles;
    // 뉴스 리스트가 확정이 되고 난 후에 render를 돌려야 한다.
    render();

    //  data의 내용을 개발자 모드에서 확인해 보면
    // articles, status, totalResults 가 있는 것을 확인할 수 있다. 따라서 articles를 보고 싶다면
    // data.articles 로 쓸 수 있다.
    // 따라서 article 부분을 news에 저장해서 뽑아 볼 수 있다.
    console.log('rrr', newsList);
};

getNews();
// https://newsapi.org/v2/top-headlines?country=us&apiKey=dddc6ed86f8243368ad4fdab7ca2a3c3

// 자료를 가져오는 함수 = fetch()
// 보고 싶은 데이터는 body 안의 데이터인데 json의 형태로 뽑아 달라 라고 요청할 수 있다.
// 즉 response의 데이터를 response.json() 제이슨의 형태로 뽑아 달라
// const data = response.json();
// 파일 형태의 확장자. 객체 - 텍스트 타입

// 뉴스를 그려주는 함수를 만들어야 한다.
// 목표: 여러 개의 뉴스를 만들면 된다.
// 1. render 라는 함수를 만든다.
/*  function render(){}  이것을 바꿔 쓰면
    const render=()=>{} 이렇게 쓸 수도 있다. (제약이 몇개 생기지만)
    다음으로는 newsHTML 이라는 변수를 만들고 뉴스들이 들어갈 공간을 만들고
    HTML document 에서 = document.
    ID 값을 가져와서 = document.getElementById('')
    HTML 안에 내용을 넣어준다. document.getElementById('').innerHTML 
    안에 뭘 넣냐? document.getElementById('').innerHTML = newsHTML ;
    마지막으로 여러 개의 뉴스 테그들의 총 부모는 누구냐? section이다. 
 */

const getNewsByCategory = async (event) => {
    // console.log("category")
    // 2. 뉴스 가져오기 (URL)
    // url을 가져와야 하는데 어디서 가져온다? 기존의 url을 copy 해 온다.
    // 다만 카테고리 클릭한건 어떻게 알고 있지? 클릭한 애가 알고 있다.
    // 그래서 확인을 위해 textContent를 가져온다. 어디의 ? target 이벤트의
    // 가져온것을 확인해 보면 앞에가 대문자이다. 따라서 .toLowerCase()를 해 준다.
    const category = event.target.textContent.toLowerCase();
    console.log('category: ', category);
    const url = new URL(
        `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${API_KEY}`
    );
    const response = await fetch(url);
    const data = await response.json();
    newsList = data.articles;
    // 뉴스 리스트가 확정이 되고 난 후에 render를 돌려야 한다.
    render();
};

const render = () => {
    let newsHTML = ``;
    // newsList 맵 안에 있는 내용을 하나씩 꺼내서 액션을 취할 수 있다.
    // newsList.map(item=)
    // 가져온 내용들 중에서 바꿀 것들을 변수처리한다.
    newsHTML = newsList
        .map(
            (item) => `<div class="row news">
                    <div class="col-lg-4 pt-2 pb-2">
                        <img
                            class="news-img-size"
                            src="${item.urlToImage}"
                            alt=""
                            srcset=""
                        />
                    </div>
                    <div class="col-lg-8 pt-2 pb-2">
                        <h2>${item.title}</h2>
                        <p>${item.description}</p>
                        <div>${item.source.name} * ${item.publishedAt}</div>
                    </div>
                </div>`
        )
        .join('');
    // 뉴스 사이사이에 배열이기 때문에 , 가 보인다.
    // 배열에서 , 를 없애려면 join('')를 사용한다.
    console.log('html', newsHTML);
    document.getElementById('news-board').innerHTML = newsHTML;
};
// 현재 API 로 불러온 뉴스가 어디에 저장되어 있지? newsList =[];
// 그러면 어떻게 랜더링을 하지? for 문으로
// 하지만 이번에는 다른 방법으로 (ES6) >> array 함수
// ES6 함수중에 map 이 있다.

// API 문서에는 7개의 카테고리만 제공이 가능하다.
// 1. 버튼들을 모두 들고 와야 한다. (클릭 이벤트)
// - 메뉴들을 모두 들고 와주세요.
// const menus = document.querySelectAll() <-- 여러 개를 한번에 들고 오기
// 메뉴라는 클래스 밑에 있는 버튼들
// 2. 카테고리별 뉴스를 가져와야 한다.
// 3. 그 뉴스를 보여줘야 한다.
// document.getElementById(`${categories}`)
