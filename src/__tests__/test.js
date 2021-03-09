/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { Character } from '../js/Character.js';

test('first add_test', () => {
  const char = new Character();
  char.add('fff');
  // char.add('ggg');
  // char.add('fff');
  // char.addAll('g', 'h', 'g', 'fff', 'da');
  expect(char.members.has('fff')).toBe(true);
});
test('second add_test', () => {
  const char = new Character();
  char.add('fff');
  char.add('ggg');
  char.add('fff');
  function keyArrFunc() {
    const keyArr = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const [key] of char.members.entries()) {
      keyArr.push(key);
    }
    return keyArr;
  }
  const expectedArr = ['fff', 'ggg'];
  expect(keyArrFunc()).toEqual(expectedArr);
});
test('addAll test', () => {
  const char = new Character();
  char.addAll('g', 'h', 'g', 'fff', 'fff', 'da');
  function keyArrFunc() {
    const keyArr = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const [key] of char.members.entries()) {
      keyArr.push(key);
    }
    return keyArr;
  }
  const expectedArr = ['g', 'h', 'fff', 'da'];
  expect(keyArrFunc()).toEqual(expectedArr);
});
test('toArray test', () => {
  const char = new Character();
  char.add('fff');
  char.add('ggg');
  char.add('fff');
  char.toArray();
  const expectArr = ['fff', 'ggg'];
  expect(char.toArray()).toEqual(expectArr);
});