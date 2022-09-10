export declare interface IPrintModule {
    printMessage(message: string): void;
    new(): IPrintModule;
}

export async function fnPrintModule(): Promise<IPrintModule> {
    let path2 = '../src/components/print-module';
    const { PrintModule }: { PrintModule: IPrintModule } = await import(path2);
    return PrintModule;
}