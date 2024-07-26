// 에러 처리

let weight = 20; 

try {
  // 소스코드 
  // 이 안에서 에러가 발생하면 
  if (weight < 30) {
    throw new Error('너무 마름');
  }
} catch (error) {
  console.log('에러 잡았음: ', error.message)
  // catch 가 에러를 잡아준다. 
}