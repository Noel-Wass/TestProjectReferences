"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fnPrintModule_1 = require("./fnPrintModule");
async function test() {
    const PrintModule = await (0, fnPrintModule_1.fnPrintModule)();
    const printModule = new PrintModule();
    printModule.printMessage('Hello!!!');
    printModule.printMessage('Goodbye!!!');
}
test();
