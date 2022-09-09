import { api, IPrintModule } from './api';

async function test() {
    let PrintModule: IPrintModule = await api();
    const printModule = new PrintModule();
    printModule.printMessage('Hello!!!');
    printModule.printMessage('Goodbye!!!');
}

test();

export { }

