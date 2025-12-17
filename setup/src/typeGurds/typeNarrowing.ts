function getChai(kind: String | number) {
  if (typeof kind === "string") {
    return `making ${kind} chai...`;
  }
  return `chai order : ${kind}`;
}

function serverChai(msg?: string) {
  if (msg) return `servering ${msg}`;
  return `serving default chai`;
}

function orderChai(size: "medium" | "small" | "large" | number) {
  if (size == "small") {
    return `small cutting chai...`;
  }
  if (size == "medium") {
    return `small cutting chai...`;
  }
  if (size == "large") {
    return `small cutting chai...`;
  }
  return size + 2;
}

class KulhadChai {
  server() {
    return `serving kulhad chai`;
  }
}
class CuttigChai {
  server() {
    return `serving CuttigChai chai`;
  }
}
function server(chai: KulhadChai | CuttigChai) {
  if (chai instanceof KulhadChai) {
    return chai.server();
  }
  return chai.server();
}

type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj != null &&
    typeof obj.type == "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) return `serve ${item.type} and ${item.sugar}`;
  return `serving custom chai ${item}`;
}

type MasalaChai = {
  type: "masala";
  spiceLevel: number;
};

type GingerChai = {
  type: "GingerChai";
  spiceLevel: number;
};
type ElychiChai = {
  type: "ElychiChai";
  spiceLevel: number;
};

type chai = MasalaChai | GingerChai | ElychiChai;

function MakeChai(order: chai) {
  switch (order.type) {
    case "ElychiChai":
      return `elychi teas`;
    case "GingerChai":
      return `ginger tea`;
    case "masala":
      return `masala tea`;
  }
}

function brew(order: MasalaChai | GingerChai){
    if("spiceLevel" in order){
        //
    }
}
// function isStringArray(arr: unknown) : arr is string[]{
//     return (

//     )

// }