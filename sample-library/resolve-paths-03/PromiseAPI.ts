import { fnPrintModule, IPrintModule } from './fnPrintModule';


export declare type PrintModuleAPI = {
    PrintModule: IPrintModule
}


export const PromiseAPI : Promise<PrintModuleAPI> = (async function API(): Promise<PrintModuleAPI> {
    
    return {
        PrintModule: await fnPrintModule()
    }
})();