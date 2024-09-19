//@ts-nocheck
// customer buying new machine. we have to assembling it for them :D .

  class Dispenser {
    assemble() {
      console.log("Assembling dispenser...");
    }
  }
  
  class ButtonPanel  {
    connect() {
      console.log("Assembling button panel...");
    }
  }
  
  class CoinMechanism {
    attach() {
      console.log("Assembling coin mechanism...");
    }
  }
  
  class VendingMachineFacade {
    private dispenser: Dispenser;
    private buttonPanel: ButtonPanel;
    private coinMechanism: CoinMechanism;
    private name : string
  
    constructor(n,d,b,c){
        this.name = n
        this.dispenser = d
        this.buttonPanel = b
        this.coinMechanism = c
    }
    assembleMachine() {
      if(this.dispenser)this.dispenser.assemble();
      if(this.buttonPanel)this.buttonPanel.connect();
      if(this.coinMechanism)this.coinMechanism.attach();
      console.log(`Vending machine ${this.name} assembled successfully!`);
      console.log('-------------------------')
    }
  }
  
  const dispenser = new Dispenser();
  const buttonPanel = new ButtonPanel();
  const coinMechanism = new CoinMechanism();
  const vendingMachine1 = new VendingMachineFacade('vending 001',dispenser,buttonPanel,coinMechanism);
  vendingMachine1.assembleMachine();
  const vendingMachine2 = new VendingMachineFacade('vending 002',dispenser,null,null);
  vendingMachine2.assembleMachine();