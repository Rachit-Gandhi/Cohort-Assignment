
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}
class ClassName {
  constructor(member1, member2){
    this.member1 = member1;
    this.member2 = member2;
    return this;
  }
  describe(){
    return '${this.member1} and {this.member2}'
  }
}
let hello = ClassName.constructor("hello1","hello2");
console.log(hello);


