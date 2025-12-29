interface Chai {
  flavour: string;
  price: number;
  milk?: boolean;
}

const masalaChai: Chai = {
  flavour: "masala",
  price: 30,
};

interface Shop {
  readonly _id: string;
  name: string;
}

const s: Shop = {
  _id: "chai aur code",
  name: "alychi tea",
};

interface DiscountCalculator {
  (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.2;

console.log(apply50(10));
interface TeaMachine {
  start(): void;
  stop(): void;
}

const mechine: TeaMachine = {
  start: function (): void {
    throw new Error("Function not implemented.");
  },
  stop: function (): void {
    throw new Error("Function not implemented.");
  },
};

interface ChaiRating {
  [flavour: string]: number;
}

const ratings: ChaiRating = {
  masala: 4.5,
  ginger: 3.4,
};

interface User {
  name: string;
}
interface User {
  age: number;
}

interface A {
  a: string;
}
interface B {
  b: string;
}
interface C extends A, B {}
