"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PromiseAPI_1 = require("./PromiseAPI");
async function test() {
    const API = await PromiseAPI_1.PromiseAPI;
    const printModule = new API.PrintModule();
    printModule.printMessage('Hello!!!');
    printModule.printMessage('Goodbye!!!');
}
test();
