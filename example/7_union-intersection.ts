// function logMessage(value: string) {
//   console.log(value);
// }
// function logMessage(value: number) {
//   console.log(value);
// }
// function logMessage(value: any) {
//   console.log(value);
// }

// # Union 타입 문법 - `any` 보다는 명시적임
// function logMessage(value: string | number) {
//   console.log(value);
// }

function logMessage(value: string | number) {
  if (typeof value === 'string') {
    value.toLocaleUpperCase();
  }
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  throw new TypeError('value must be string or number')
}

// # Intersection 타입 문법
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  someone.name; // O
//  someone.age; // X
}

function askSomeone2(someone: Developer & Person) {
  someone.name;
  someone.age;
  someone.skill;
}

enum Shoes {
  Nike,
  Adidas
}

let myShoes = Shoes.Nike;
console.log(myShoes);

enum Answer {
  Yes = 'Y',
  No = 'N'
}

function askQeustion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('correct');
  }
  if (answer == Answer.No) {
    console.log('wrong');
  }
}

askQeustion(Answer.Yes);

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    console.log('created person');
    this.name = name;
    this.age = age;
  }
}

const aredra = new Person('aredra', 99);