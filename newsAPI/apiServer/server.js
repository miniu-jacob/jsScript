const express = require('express');
const cors = require('cors');     // cors 패키지 불러오기
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

// JSON 파일 경로 설정
// OS의 __dirname 과 response.json 파일을 붙여 리턴한다. 
const responseFilePath = path.join(__dirname, 'response.json');

// CORS 미들웨어 사용 
app.use(cors());

/* ### json 파일을 하나만 두고 응답할때 

    요청 처리: /news 경로로 들어오는 요청에 대해 response.json 파일 내용을 리턴
    // res.sendFile() 메소드는 파일의 내용을 응답으로 보낼 때 사용한다.
    app.get('/news', (req, res) => {
      res.sendFile(responseFilePath);
    });

*/

// news 경로로 들어오는 요청에 대해 response.json 파일 내용을 리턴
app.get('/news', (req, res) => {
  const category = req.query.category;
  const query = req.query.q;

  fs.readFile(responseFilePath, 'utf8', (err, data) => {

    if (err) {
      return res.status(500).send('Error reading the file');
    }

    let newsData;
    try {
      newsData = JSON.parse(data);
    } catch (e) {
      return res.status(500).send('Error parsing JSON data');
  }

    let filteredArticles = newsData.articles;

    if (category) {
      filteredArticles = filteredArticles.filter(article => article.category && article.category.toLowerCase() === category.toLocaleLowerCase());
    }

    if (query) {
      const keyword = query.toLowerCase();
      filteredArticles = filteredArticles.filter(article =>
        (article.title && article.title.toLowerCase().includes(keyword)) ||
        (article.description && article.description.toLowerCase().includes(keyword))
      );
    }
    return res.json({ ...newsData, articles: filteredArticles });

      // 카테고리가 없거나 필터링된 결과가 없는 경우 전체 데이터를 반환
    //   if (filteredArticles.length > 0) {
    //   } else {
    //       return res.json(newsData);
    //   }
    // } else {
    //   return res.json(newsData);
    // }
  });
});
  



// 서버 실행 
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
})