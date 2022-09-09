let path2 = '../src/components/print-module';
declare interface IPrintModule {
    printMessage(message: string): void;
    new(): IPrintModule;
}

async function test() {
    const { PrintModule }: { PrintModule: IPrintModule }  = await import(path2);
    let p: IPrintModule = new PrintModule();
    p.printMessage('Hello!!!');
    p.printMessage('Goodbye!!!');
}
test();

export { }