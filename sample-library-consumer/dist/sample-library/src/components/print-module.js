"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePrintModule = exports.PrintModule = void 0;
class PrintModule {
    printMessage(message) {
        console.log(message);
    }
}
exports.PrintModule = PrintModule;
function CreatePrintModule() {
    return new PrintModule();
}
exports.CreatePrintModule = CreatePrintModule;
