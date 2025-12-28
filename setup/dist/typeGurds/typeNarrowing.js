"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(kind) {
    if (typeof kind === "string") {
        return `making ${kind} chai...`;
    }
    return `chai order : ${kind}`;
}
function serverChai(msg) {
    if (msg)
        return `servering ${msg}`;
    return `serving default chai`;
}
function orderChai(size) {
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
function server(chai) {
    if (chai instanceof KulhadChai) {
        return chai.server();
    }
    return chai.server();
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj != null &&
        typeof obj.type == "string" &&
        typeof obj.sugar === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item))
        return `serve ${item.type} and ${item.sugar}`;
    return `serving custom chai ${item}`;
}
function MakeChai(order) {
    switch (order.type) {
        case "ElychiChai":
            return `elychi teas`;
        case "GingerChai":
            return `ginger tea`;
        case "masala":
            return `masala tea`;
    }
}
function brew(order) {
    if ("spiceLevel" in order) {
        //
    }
}
// function isStringArray(arr: unknown) : arr is string[]{
//     return (
//     )
// }
//# sourceMappingURL=typeNarrowing.js.map