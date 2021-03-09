export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    return this.members.add(member);
  }

  addAll(...allMembers) {
    // eslint-disable-next-line no-restricted-syntax
    for (const param of allMembers) {
      this.members.add(param);
    }
  }

  toArray() {
    const array = [...this.members];
    return array;
  }
}
