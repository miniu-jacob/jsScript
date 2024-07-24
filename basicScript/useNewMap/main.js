// 클래스 만들기

// 클래스 선언
class Person {
    // 생성자
    constructor(name, age) {
        // 필드
        this.name = name;
        this.age = age;
    }

    // 메소드
    speak() {
        console.log(`${this.name}: Hello!`);
    }
}

// 오브젝트 (객체) 생성하기
const whoami = new Person('jacob', 18);

// console.log(whoami);
// 배열이 출력된다.

// console.log(whoami.name);
// console.log(whoami.age);

// 메소드를 호출할 때는 console.log로 출력하는게 아니라. {객체}.{함수}로 호출한다.
// (X) console.log(whoami.speak());
// whoami.speak();

// ### 2. Getter and Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // get이라는 것을 이용해서 값을 리턴하고
    // set이라는 것을 이용해서 값을 세팅할 수 있다. 이때는 값을 설정하기 때문에 그 값을 받아와야 한다.

    // age라는 getter를 정의하는 순간 생성자의 this.age 는
    // 메모리에 올라가 있는 데이터를 읽어오는 것이 아니라 getter를 호출한다.

    // 또한 세터를 정의하는 순간 = age 와 같이 값을 할당할 때 메모리에 값을 할당하는 것이 아니다.
    // 세터를 호출하게 된다.
    // 따라서 value가 age안에 들어가고 이것은 다시 value를 부르고 반복되어 에러가 발생한다.
    // 결론적으로 게터와 세터에 들어가는 변수의 이름은 다르게 설정해야 한다.
    // this.age 가 아니라. this._age;
    get age() {
        return this._age;
    }
    set age(value) {
        /* 또는 다른 방법으로 음수가 나오는 경우 0으로 세팅할 수도 있다. (삼항연산자)
          if (value < 0) {
              throw Error('나이는 음수가 될 수 없습니다.');
          }
        */
        this._age = value < 0 ? 0 : value;
    }
}

// 커피 머신에서 사용자가 커피를 -1잔을 주문할 수 있을까?
// 이를 방어하기 위한 방법
const user1 = new User('Steve', 'Jobs', -1);
// console.log(user1);

// User 라는 클래스 안에는 총 3개의 필드가 있다.
// 1. firstName, 2. lastName, 3. _age
// 세터에서 잘못된 값에 대한 방어
// if(value <0){
// throw Error('age cannot be minus')}

// ### 3. Fields (public, private)
// 생성자를 쓰지 않고 필드를 정의
class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
// console.log(experiment.publicField);
// console.log(experiment.privateField);

// ### 4. 상속, 다양성
// 도형을 만든다고 가정하면 네모, 세모, 원 등 공통적으로 들어가는 부분들이 있다.
// 이들을 뽑아내서 클래스를 만든다.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!!`);
    }

    getArea() {
        return width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('삼각형');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
const triangle = new Triangle(20, 20, 'red');
rectangle.draw();
triangle.draw();
console.log(triangle.getArea());

/* 
  삼각형은 getArea 메소드가 아니라 return width * this.height / 2
  이 때, 필요한 부분만 재정의해서 쓸 수 있다.
  class Triangle extends Shape { 
    getArea(){
      return (this.width * this.height) / 2;
    }
  }

  함수를 재정의하는 것: 오버라이딩 -> 부모의 메소드와는 독립적으로 실행되며, 
  부모의 메소드는 실행되지 않는다. 

  부모의 메소드도 실행되면서 내것도 실행할 때는 super.를 사용한다. 
  */
