const chai = {
  name: "masala chai",
  price: 20,
  isHot: true,
};
// chai.add = true

let tea: {
  name: string;
  readonly price: number;
  isHot: boolean;
};
type Tea = {
  name: string;
  price: number;
  ingre: string[];
};

const adrakChai: Tea = {
  name: "",
  price: 35,
  ingre: [""],
};

type Cup = {
  size: string;
};
let small: Cup = {
  size: "200ml",
};
let bigCup = {
  size: "500ml",
  material: "steel",
};
small = bigCup;

type Brew = {
  brewNumber: number;
};
const coffee = {
  brewNumber: 5,
  beans: "arbic",
};

type User = {
  userName: string;
  password: string;
};

const u: User = {
  userName: "chai code",
  password: "!234",
};

type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  Items: Item[];
  address: Address;
};

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (updates: Partial<Chai>) => {
  console.log(`updating chai with ${updates}`);
};

updateChai({ price: 25 });
type ChaiOrder = {
  name?: string;
  quantity?: number;
};

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};

placeOrder({
  name: "kishan",
  quantity: 2323,
});
type Chai2 = { name: string; price: number; isHot: boolean; ingre: string[] };

type BasiChaiInfo = Pick<Chai2, "name" | "price">;

const chaiInfo: BasiChaiInfo = {
  name: "lemon tea",
  price: 30,
};

type ChaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  ingre: string[];
};

type PublicChai = Omit<ChaiNew, "ingre">;
