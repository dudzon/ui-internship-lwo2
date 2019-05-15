export class Person {
  constructor( fullname) {
    this.fullname = fullname;
    this.first = this.fullname.split(' ')[0];
    this.last = this.fullname.split(' ')[1];
  }

  getFullName() {
    return this.fullname;
  }
  setFullName(firstAndLast) {
    this.fullname = firstAndLast;
  }
  setFirstName(first) {
    this.first = first;
    this.fullname = this.first + ' ' + this.last;
  }
  setLastName(last) {
    this.last = last;
    this.fullname = this.first + ' ' + this.last;
  }
  getFirstName() {
    return this.first;
  }
  getLastName() {
    return this.last;
  }
}
