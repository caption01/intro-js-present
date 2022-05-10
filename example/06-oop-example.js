// oop example

class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`my name is ${this.name} i am ${this.age} year-old`);
  }

  getOlder(year) {
    this.age = this.age + year;
  }
}

const bas = new People("bas", 20);

bas.introduce();
bas.getOlder(3);
bas.introduce();
