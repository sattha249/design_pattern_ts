// @ts-nocheck
class PaymentGateway {
    static #instance: PaymentGateway;
    static registeredGateway : string
    private constructor() {
        // this.initTime = new Date() 
        console.log('initilized !!!! ')
    }

    public static get instance(): PaymentGateway {
        if (!PaymentGateway.#instance) {
            PaymentGateway.#instance = new PaymentGateway();
        }
        return PaymentGateway.#instance;
    }

    setPaymentGatewayProvider(p : string){
        this.registeredGateWay = p
    }

    getPaymentGatewayProvider() {
        return this.registeredGateWay
    }

    destroyed() {
     console.log('unregistered payment gateway')   
    }
}
function client() {
    console.log('start init smartMachineGateway1')
    const smartMachineGateway1 = PaymentGateway.instance;
    console.log('machine 1 change gateway to LUGENT')
    smartMachineGateway1.setPaymentGatewayProvider('LUGENT')
    console.log(`machine 1 gateway = ${smartMachineGateway1.getPaymentGatewayProvider()}`)

 
    console.log('start init smartMachineGateway2')
    const smartMachineGateway2 = PaymentGateway.instance;
    console.log(`machine 2 gateway = ${smartMachineGateway2.getPaymentGatewayProvider()}`)
    console.log('machine 2 change gateway to RABBIT')
    smartMachineGateway2.setPaymentGatewayProvider('RABBIT')
    console.log(`machine 1 gateway = ${smartMachineGateway1.getPaymentGatewayProvider()}`)
    

    smartMachineGateway1.destroyed()

}

client();

