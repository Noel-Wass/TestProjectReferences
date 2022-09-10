"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api2_1 = require("./api2");
async function test() {
    const API = await api2_1.PromiseAPI;
    const printModule = new API.PrintModule();
    printModule.printMessage('Hello!!!');
    printModule.printMessage('Goodbye!!!');
}
test();
