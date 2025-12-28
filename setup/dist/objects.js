"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = {
    name: "masala chai",
    price: 20,
    isHot: true,
};
// chai.add = true
let tea;
const adrakChai = {
    name: "",
    price: 35,
    ingre: [""],
};
let small = {
    size: "200ml",
};
let bigCup = {
    size: "500ml",
    material: "steel",
};
small = bigCup;
const coffee = {
    brewNumber: 5,
    beans: "arbic",
};
const u = {
    userName: "chai code",
    password: "!234",
};
const updateChai = (updates) => {
    console.log(`updating chai with ${updates}`);
};
updateChai({ price: 25 });
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({
    name: "kishan",
    quantity: 2323,
});
const chaiInfo = {
    name: "lemon tea",
    price: 30,
};
//# sourceMappingURL=objects.js.map