//@ts-nocheck

/* in my company we have real vending machine for sell and have vending machine-like speaker for give to customer as a gift.
*/
interface Builder {
    reset(): void;
    buildGlassFront(gf: boolean): void;
    buildRFIDReader(rr: boolean): void;
    buildBrewMachine(bm: boolean): void;
    buildQRReader(qr: boolean): void;
    buildDispenseElevator(de: number): void;
    buildSmartOS(os: string): void;
    getProduct(): VendingMachine;  
}

class VendingMachineBuilder implements Builder {
    private vendingMachine: VendingMachine;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.vendingMachine = new VendingMachine();
    }

    public buildGlassFront(gf: boolean): void {
        this.vendingMachine.setGlassFront(gf);
    }

    public buildRFIDReader(rr: boolean): void {
        this.vendingMachine.setRFIDReader(rr);
    }

    public buildBrewMachine(bm: boolean): void {
        this.vendingMachine.setBrewMachine(bm);
    }

    public buildQRReader(qr: boolean): void {
        this.vendingMachine.setQRReader(qr);
    }

    public buildDispenseElevator(de: number): void {
        this.vendingMachine.setDispenseElevator(de);
    }

    public buildSmartOS(os: string): void {
        this.vendingMachine.setSmartOs(os);
    }

    public getProduct(): VendingMachine {
        const product = this.vendingMachine;
        return product;
    }
}

class VendingMachine {
    private glassFront: boolean;
    private rfidReader: boolean;
    private brewMachine: boolean;
    private qrReader: boolean;
    private dispenseElevator: number;
    private smartOs: string;

    public setGlassFront(gf: boolean): VendingMachine {
        this.glassFront = gf;
        return this;
    }

    public setRFIDReader(rr: boolean): VendingMachine {
        this.rfidReader = rr;
        return this;
    }

    public setBrewMachine(bm: boolean): VendingMachine {
        this.brewMachine = bm;
        return this;
    }

    public setQRReader(qr: boolean): VendingMachine {
        this.qrReader = qr;
        return this;
    }

    public setDispenseElevator(de: number): VendingMachine {
        this.dispenseElevator = de;
        return this;
    }

    public setSmartOs(os: string): VendingMachine {
        this.smartOs = os;
        return this;
    }

}

class Director {
    public makeVendingMachine(builder: Builder): void {
        builder.reset();
        builder.buildGlassFront(true);
        builder.buildRFIDReader(true);
        builder.buildBrewMachine(true);
        builder.buildQRReader(true);
        builder.buildDispenseElevator(2);
        builder.buildSmartOS('Linux');
    }

    public makeVendingMachineSpeaker(builder: Builder): void {
        builder.reset();
        builder.buildGlassFront(true);
        builder.buildBrewMachine(true);
        builder.buildDispenseElevator(1);
        builder.buildSmartOS('Speaker');
    }
}


function clientCode(director: Director) {
    const vendingMachineBuilder = new VendingMachineBuilder();

    director.makeVendingMachine(vendingMachineBuilder);
    const vendingMachine = vendingMachineBuilder.getProduct();
    console.log('Vending Machine:', vendingMachine);

    director.makeVendingMachineSpeaker(vendingMachineBuilder);
    const vendingMachineSpeaker = vendingMachineBuilder.getProduct();
    console.log('Vending Machine Speaker:', vendingMachineSpeaker);
}

const director = new Director();
clientCode(director);
