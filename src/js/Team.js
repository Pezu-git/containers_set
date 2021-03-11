export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) {
      throw new Error('Персонаж уже добавлен');
    }
    return this.members.add(member);
  }

  addAll(...allMembers) {
    // eslint-disable-next-line no-restricted-syntax
    for (const param of allMembers) {
      this.members.add(param);
    }
  }

  toArray() {
    this.members = [...this.members];
  }
}
