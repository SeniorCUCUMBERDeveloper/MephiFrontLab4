interface IUser {
  name: string;
  age: number;
  hello(): void;
}

class User implements IUser {
  constructor(public name: string, public age: number) {}

  hello(): void {
    console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
  }
}

const user1 = new User('Иван', 30);
user1.hello();

const user2 = new User('Мария', 22);
user2.hello();

export {};