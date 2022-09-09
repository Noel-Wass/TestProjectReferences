let path2 = '../src/components/print-module';
export declare interface IPrintModule {
    printMessage(message: string): void;
    new(): IPrintModule;
}

export async function api(): Promise<IPrintModule> {
    const { PrintModule }: { PrintModule: IPrintModule } = await import(path2);
    return PrintModule;
}