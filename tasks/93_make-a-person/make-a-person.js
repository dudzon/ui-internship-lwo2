export class Person {
  constructor( fullname) {
    this.setFullName(fullname);
  }

  getFullName() {
    return this.first + ' ' + this.last;
  }
  setFullName(fullName) {
    this.first = fullName.split(' ')[0];
    this.last = fullName.split(' ')[1];
  }
  setFirstName(first) {
    this.first = first;
  }
  setLastName(last) {
    this.last = last;
  }
  getFirstName() {
    return this.first;
  }
  getLastName() {
    return this.last;
  }
}
