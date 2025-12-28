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
  public flavour: string = "masala";
  private ing: string[] = ["cardemam"];

  revel(): string[] {
    return this.ing;
  }
  protected shopName = "chai corner";
  getShopName(): string {
    return this.shopName;
  }
}

class Masala extends Chai {
  #balance = 100; //shop balance
  override getShopName(): string {
    return this.shopName;
  }
  getBalance() {
    return this.#balance;
  }
}
class ModernChai {
  private _suger: number = 2;

  public get getVal(): number {
    return this._suger;
  }

  public set setVal(v: number) {
    this._suger = v;
  }
}

abstract class Drink {
  abstract make(): void;
}

class MyChai extends Drink {
  override make(): void {
    console.log(`tea making... brewing...`);
  }
}

class Heater {
  heat() {}
}
class ChaiMaker {
  constructor(private heater: Heater) {}
  make() {
    this.heater.heat;
  }
}
