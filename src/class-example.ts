class A {

    constructor(private _name: string, private _age: number) {

    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }
}

class B extends A{
    healthy=true;
}

let a = new B('mukul',26);
console.log(a.name,a.age);