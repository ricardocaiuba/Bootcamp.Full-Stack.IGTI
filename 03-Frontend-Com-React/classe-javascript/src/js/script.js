window.addEventListener("load", () => {
  console.log("JS started...");

  const animal = new Animal("Canjica");
  animal.Speak();

  const dog = new Dog("Totó", "Vira-lata");
  dog.Speak();

  const cat = new Cat("Canjica", "Panterinha");
  cat.Speak();

  const cat2 = new Cat("Trovão", "Outra Panterinha");
  cat2.Speak();
});

class Animal {
  constructor(name) {
    this.name = name;
  }
  Speak() {
    console.log(`${this.name} falando...`);
  }
}

class Dog extends Animal {
  constructor(name, type) {
    super(name);
    this.type = type;
  }

  Speak() {
    console.log(`${this.name} (${this.type}) latindo...`);
  }
}

class Cat extends Animal {
  constructor(name, type) {
    super(name);
    this.type = type;
  }

  Speak() {
    console.log(`${this.name} (${this.type}) miando...`);
  }
}
