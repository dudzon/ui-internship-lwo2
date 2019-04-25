
// eslint-disable-next-line no-unused-vars
export class SimTime {
  constructor() {
    this.time = 0;
    this.realTime = 0;
    this.speed = 1;
  }
  get() {
    return this.time;
  }
  setSpeed(newSpeed) {
    return this.speed = newSpeed;
  }

  update(currentTime) {
    if (this.realTime > currentTime) throw new Error('Something is wrong');
    // eslint-disable-next-line max-len
    const newCurrentTime = this.time + (currentTime - this.realTime) * this.speed;
    this.time = newCurrentTime;
    this.realTime = currentTime;
  }
}
