export class God {
  static create() {
    return [new Man('Adam'), new Woman('Eve')];
  }
}

export class Human {
  constructor(name) {
    this.name = name;
  }
}

export class Man extends Human {
  constructor( name, sex ) {
    super(name);
    this.sex = 'male';
  }
}

export class Woman extends Human {
  constructor( name, sex ) {
    super(name);
    this.sex = 'female';
  }
}
