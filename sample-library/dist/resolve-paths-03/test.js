"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
async function test() {
    let PrintModule = await (0, api_1.api)();
    const printModule = new PrintModule();
    printModule.printMessage('Hello!!!');
    printModule.printMessage('Goodbye!!!');
}
test();
