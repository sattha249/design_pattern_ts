//@ts-nocheck
// we will copy prototype machine to new machine which have smart machine and dumb machine :D

interface Prototype {
    clone(): Prototype;
  }
  
  class VendingMachine implements Prototype {
    microcontroller: any;
  
    constructor(prototype: VendingMachine) {
      this.microcontroller = prototype.microcontroller;
    }
  
    clone(): VendingMachine {
      return new VendingMachine(this);
    }
  }
  
  class OnlineMachine {

  }

  class OfflineMachine{

  }
  
 
// online vending machine with Pi
const onlineMachine = new OnlineMachine ({microcontroller:'Orange pi'})
// offline vending machine
const offlineMachine = new OfflineMachine ({microcontroller:'ASM'})

client([onlineMachine,offlineMachine])
// client(offlineMachine)

function client(machine){
    let result = []
    console.log('start copy')
    for (let i = 0 ; i < machine.length; i++){
        let m = machine[i].clone()
        if (m.microcontroller == 'ASM'){
          m.cardReader = 'RFID Scanner'
        }
        else{
          m.operatingSystem = 'Ubuntu'
          m.qrCodeReader ='lugent QR'
        }
        result.push(m)
    }
    console.log(result)

    
    console.log('--------------')
   
}