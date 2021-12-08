export default class LocalStorageMock {
  constructor() {
    this.list = {};
  }

  setItem(index, value) {
    this.list[index] = value;
  }

  getItem(index) {
    const tempVal = this.list[index];
    return tempVal;
  }
};
