const chaiFlavours: (string | number)[] = ["masala", 23, 23];
const ratings: Array<number> = [4.6, 5.0];

type Chai = {
  name: string;
  price: number;
};
const menu: Chai[] = [
  { name: "alychi", price: 30 },
  { name: "alychi", price: 30 },
];

const cities: readonly string[] = ["delhi"];

let chaiTuple: [string, number];

chaiTuple = ["masala", 23];

enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.LARGE;

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}
function makeTea(type: ChaiType) {
  console.log(`making: ${type}`);
}
makeTea(ChaiType.GINGER);

enum RandomEnum {
  ID = 1,
  NAME = "chai",
}
const enum Suger {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}
const s = Suger.HIGH;
let tea: [string, number] = ["chai", 10];
