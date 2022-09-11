import { PromiseAPI, PrintModuleAPI } from './PromiseAPI';

async function test() {
    const API: PrintModuleAPI = await PromiseAPI;
    const printModule = new API.PrintModule();
    printModule.printMessage('Hello!!!');
    printModule.printMessage('Goodbye!!!');
}

test();

export { }

