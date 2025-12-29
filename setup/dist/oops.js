// class Chai {
//   flavour: string;
//   price: number;
//   constructor(flavour: string, price: number) {
//     this.flavour = flavour;
//     this.price = price;
//   }
// }
// const masalaTea = new Chai("adrak", 20);
// console.log(this);
class Chai {
    flavour = "masala";
    ing = ["cardemam"];
    revel() {
        return this.ing;
    }
    shopName = "chai corner";
    getShopName() {
        return this.shopName;
    }
}
class Masala extends Chai {
    #balance = 100; //shop balance
    getShopName() {
        return this.shopName;
    }
    getBalance() {
        return this.#balance;
    }
}
class ModernChai {
    _suger = 2;
    get getVal() {
        return this._suger;
    }
    set setVal(v) {
        this._suger = v;
    }
}
class Drink {
}
class MyChai extends Drink {
    make() {
        console.log(`tea making... brewing...`);
    }
}
class Heater {
    heat() { }
}
class ChaiMaker {
    heater;
    constructor(heater) {
        this.heater = heater;
    }
    make() {
        this.heater.heat;
    }
}
export {};
//# sourceMappingURL=oops.js.map