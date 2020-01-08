class A {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
}
class B extends A {
    constructor() {
        super(...arguments);
        this.healthy = true;
    }
}
let a = new B('mukul', 26);
console.log(a.name, a.age);
//# sourceMappingURL=class-example.js.map