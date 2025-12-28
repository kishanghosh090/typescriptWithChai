type ChaiOrder = { type: string; suger: number; strong: boolean };

function makeChai(order: ChaiOrder) {}
function serverChai(order: ChaiOrder) {}

type TeaRecipe = {
  water: number;
  milk: number;
};

class MasalaChai implements TeaRecipe {
  water = 100;
  milk = 10;
}

interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

// interface Response { ok: true } & { ok: false };
// class myRes implements Response {
//   ok: boolean = true;
// }

type TeaType = "masala" | "alychi" | "ginger";

function orderChai(t: TeaType) {}

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };
type masalaChai = BaseChai & Extra;

const cup: masalaChai = {
  teaLeaves: 2,
  masala: 3,
};
