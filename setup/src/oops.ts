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
}
