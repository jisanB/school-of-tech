class Person {
  constructor() {
    // name: The full name of the person
    this.name = RandomName.first() + ' ' + RandomName.last();
    // position: The map position of the person
    this.position = {
      x: 0,
      y: 0,
      z: 0,
    };
    // destination: where you want to go
    this.destination = this.position;
    // needs: 0-100 What needs does this person have? 100 means satisfied.
    this.needs = {
      hunger: 100,
      bladder: 100,
      fun: 100,
      energy: 100,
      hygiene: 100,
      social: 100,
    };
  }
}
export default Person;