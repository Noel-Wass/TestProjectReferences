"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseAPI = void 0;
const fnPrintModule_1 = require("./fnPrintModule");
exports.PromiseAPI = (async function API() {
    //async function fnPrintModule(): Promise<IPrintModule> {
    //    const path2 = '../src/components/print-module';
    //    const PrintModule: IPrintModule = await import(path2);
    //    return PrintModule;
    //}
    return {
        PrintModule: await (0, fnPrintModule_1.fnPrintModule)()
    };
})();
