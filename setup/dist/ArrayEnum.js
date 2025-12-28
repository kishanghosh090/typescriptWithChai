"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chaiFlavours = ["masala", 23, 23];
const ratings = [4.6, 5.0];
const menu = [
    { name: "alychi", price: 30 },
    { name: "alychi", price: 30 },
];
const cities = ["delhi"];
let chaiTuple;
chaiTuple = ["masala", 23];
var CupSize;
(function (CupSize) {
    CupSize[CupSize["SMALL"] = 0] = "SMALL";
    CupSize[CupSize["MEDIUM"] = 1] = "MEDIUM";
    CupSize[CupSize["LARGE"] = 2] = "LARGE";
})(CupSize || (CupSize = {}));
const size = CupSize.LARGE;
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = "masala";
    ChaiType["GINGER"] = "ginger";
})(ChaiType || (ChaiType = {}));
function makeTea(type) {
    console.log(`making: ${type}`);
}
makeTea(ChaiType.GINGER);
var RandomEnum;
(function (RandomEnum) {
    RandomEnum[RandomEnum["ID"] = 1] = "ID";
    RandomEnum["NAME"] = "chai";
})(RandomEnum || (RandomEnum = {}));
var Suger;
(function (Suger) {
    Suger[Suger["LOW"] = 1] = "LOW";
    Suger[Suger["MEDIUM"] = 2] = "MEDIUM";
    Suger[Suger["HIGH"] = 3] = "HIGH";
})(Suger || (Suger = {}));
const s = Suger.HIGH;
let tea = ["chai", 10];
//# sourceMappingURL=ArrayEnum.js.map