"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseAPI = void 0;
const fnPrintModule_1 = require("./fnPrintModule");
exports.PromiseAPI = (async function API() {
    return {
        PrintModule: await (0, fnPrintModule_1.fnPrintModule)()
    };
})();
