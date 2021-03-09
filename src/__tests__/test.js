/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { Character } from '../js/Character.js';

test('add_test', () => {
  const char = new Character();
  char.add(1);
  char.add(2);
  char.add(2);
  function keyArrFunc() {
    const keyArr = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const [key] of char.members.entries()) {
      keyArr.push(key);
    }
    return keyArr;
  }
  const expectedArr = [1, 2];
  expect(keyArrFunc()).toEqual(expectedArr);
});
test('addAll test', () => {
  const char = new Character();
  char.addAll(1, 2, 1, 3, 3, 4);
  function keyArrFunc() {
    const keyArr = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const [key] of char.members.entries()) {
      keyArr.push(key);
    }
    return keyArr;
  }
  const expectedArr = [1, 2, 3, 4];
  expect(keyArrFunc()).toEqual(expectedArr);
});
test('toArray test', () => {
  const char = new Character();
  char.add(1);
  char.add(2);
  char.add(1);
  char.toArray();
  const expectArr = [1, 2];
  expect(char.members).toEqual(expectArr);
});