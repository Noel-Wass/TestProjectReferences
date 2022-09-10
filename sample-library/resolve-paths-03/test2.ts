import { PromiseAPI } from './PromiseAPI';

async function test() {
    const API = await PromiseAPI;
    const printModule = new API.PrintModule();
    printModule.printMessage('Hello!!!');
    printModule.printMessage('Goodbye!!!');
}

test();

export { }

