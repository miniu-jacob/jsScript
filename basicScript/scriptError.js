let weight = 60;

try {
    if (weight < 70) {
        //  에러를 보내는 방법은 throw new Error()  라고 쓸 수 있다.
        throw new Error('몸무게가 너무 적습니다. ');
    }
} catch (error) {
    console.log('내가 잡은 에러는: ', error.message);
}
