import {
  test,
  test2,
} from './someFile';

class Test {
  render() {
    console.log(test);
    console.log(test2);
  }
}

export default {
  create: () => new Test(),
};
