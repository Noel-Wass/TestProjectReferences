import { fnPrintModule, IPrintModule } from './fnPrintModule';

async function test() {
    const PrintModule: IPrintModule = await fnPrintModule();
    const printModule = new PrintModule();
    printModule.printMessage('Hello!!!');
    printModule.printMessage('Goodbye!!!');
}

test();

export { }

