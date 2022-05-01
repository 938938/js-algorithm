// 자료 구조

// ES2015 클래스 구문
// 클래스란? 속성 및 메소드를 이용해 객체를 생성하기 위한 청사진. 코드를 정리하는 방법.
// ex)
class Student{ // 클래스 명칭은 대문자로 시작(관습, Camel case) 
  constructor(firstName, lastName, year){
    // 모든 student는 firstname과 lastname을 가지게 됨. student 인스턴트를 인스턴트화시킬 때 사용되는 특별한 메소드
    // 새로운 student 인스턴트를 생성할 때는 firstname과 lastname을 제공하면 됨
    // 무엇이 제공되던 제공된 두 속성을 개별 객체(개별 studetn)로 할당하는 행위를 표현
    this.firstName = firstName;
    // this : 개별 클래스 인스턴트, 개별 Studetn 인스턴트를 지칭.
    this.lastName = lastName;

    this.grade = year; // this.grade는 그것이 무엇이든 새로운 student 인스턴트가 생성될 때 제공된 값으로 설정.
    this.tardies = 0; // 지각한 횟수
    this.scores = [];
  }
  markLate(){ // 지각 횟수를 더하는 메소드
    this.tardies += 1;
    if(this.tardies>=3){ // 지각이 3회 이상이 되면 반환
      return "You are expelled.";
    }
  }

  fullName(){
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  addScroe(score){
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage(){
    let sum = this.scores.reduce(function(a,b){return a+b;});
    return sum/this.scores.length;
  }

  static enrollStudents(...students){
    // 스태틱 메소드는 클래스의 인스턴트화 없이도 호출될 수 있음. 클래스 인스턴트를 통해서는 호출될 수 없음.
    // 다수의 student 클래스들을 array로 제공할 수 있는 class메소드.
    // student 클래스에 미리 설정된 이메일 주소로 이메일을 전송할 수도 있으며 그와 유사한 여러 기능을 수행할 수 있음.
    // Maybe send an email here
    return "Enrolling students";
  }
}
let firstStudent = new Student("Colt", "Steele",3);
let secondStudent = new Student("Blue", "Steele",2);

let emil = new Student("Emil","Katz",3);
emil.firstName; // Emil
// class를 정의하는 것만으로는 어떤 일도 발생하지 않음, new라는 키워드를 사용, 해당 클래스의 인스턴트를 생성해야 함.

// instance 메소드 추가
// 특정 인스턴트에 내장되어 있다기보단 특정한 단일 인스턴트(ex. Student)에 적용되는 기능을 제공.

firstStudent.fullName() // Colt Steele
firstStudent.markLate() // 지각횟수를 1회 추가 … 3회 이상이 되면 "You are expelled."가 출력.
secondStudent.addScroe(92);
secondStudent.addScroe(89);
// secondStudent.scores = [92,89];

// class 메소드 추가
class Point{
  // X좌표와 Y좌표에 의해 카티시안 평면에 표기되는 하나의 점.
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  static distance(a,b){
    const dx = a.x - b.x;
    const dy = d.y - b.y;
    return Math.hypot(dx, dy);
  }
}
const p1 = new Point(5,5);
const p2 = new Point(10, 10);
// p1과 p2 사이의 거리 구하기
Point.distance(p1, p2);