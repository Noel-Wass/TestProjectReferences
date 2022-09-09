export declare interface IPrintModule {
    printMessage(message: string): void;
    new (): IPrintModule;
}
export declare function api(): Promise<IPrintModule>;
