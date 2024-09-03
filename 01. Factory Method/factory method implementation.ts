// @ts-nocheck

interface Product {
    select(): string;
    pay(): string;
    get(): string;
}

class CanProduct implements Product {
    select(): string { return 'Can product Selected!!' };
    pay(): string { return 'Pay for Can Product!!' };
    get(): string { return 'Get Can Product!!' };
}

class SnackProduct implements Product {
    select(): string { return 'Snack product Selected !!' };
    pay(): string { return 'Pay for Snack Product!!' };
    get(): string { return 'Get Snack Product!!' };
}

class VendingMachine {
    dispenseProduct(): string {
        const product = this.createProduct()
        let result = `connecting to Server to check product from ${this.name}\n`
        result += `${product.select()}\n`
        result += `${product.pay()}\n`
        result += `${product.get()}\n`
        return result
    }
    createProduct(): Product {};
}

class CanVendingMachine extends VendingMachine {
    name = 'Can Machine'
    createProduct(): Product {
        return new CanProduct()
    }
}

class SnackVendingMachine extends VendingMachine {
    name = 'Snack Machine'
    createProduct(): Product {
        return new SnackProduct()
    }
}

function client(vendingMachine: VendingMachine) {
    console.log(vendingMachine.dispenseProduct())
}

let snackVendingMachine: VendingMachine = new SnackVendingMachine
client(snackVendingMachine)
let canVendingMachine: VendingMachine = new CanVendingMachine
client(canVendingMachine)