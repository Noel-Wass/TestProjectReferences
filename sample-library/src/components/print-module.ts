export class PrintModule {
    printMessage(message: string) {
        console.log(message);
    }
}

export function CreatePrintModule(): PrintModule {
    return new PrintModule();
}





