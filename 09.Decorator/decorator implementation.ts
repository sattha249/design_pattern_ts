//@ts-nocheck
// we have beverage machine name 'milky way' release next year !!!

interface Beverage {
  cost(): number;
}

class Topping implements Beverage{
    private beverage : Beverage
    constructor(beverage){
        this.beverage = beverage
    }
     getDescription()
     cost()
}

class Espresso implements Beverage {
  getDescription(): string {
    return "Espresso";
  }

  cost(): number {
    return 45;
  }
}

class Cocoa implements Beverage {
    getDescription(): string {
      return "Cocoa";
    }
  
    cost(): number {
      return 40;
    }
  }



class ExtraShot extends Topping {
  private beverage: Beverage;

  constructor(beverage: Beverage) {
    super()
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription()   
 + " + Extra shot";
  }

  cost(): number {
    return this.beverage.cost() + 5;
  }
}


class Whip extends Topping {
  private beverage: Beverage;

  constructor(beverage: Beverage) {
    super()
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription()   
 + " + Whip";
  }

  cost(): number {
    return this.beverage.cost() + 10;   

  }
}

function client(beverage){
    console.log(beverage.getDescription() + ": ฿" + beverage.cost());
}

console.log('espresso price')
const espresso = new Espresso()
client (espresso)

const whipEspresso = new Whip(espresso)
client (whipEspresso)

const extraShotEspresso = new ExtraShot(espresso);
client(extraShotEspresso)

const whipExtraShotEspresso = new Whip(extraShotEspresso);
client(whipExtraShotEspresso)
console.log ('----------------')
console.log('cocoa price')
const cocoa = new Cocoa()
client (cocoa)
const whipCocoa = new Whip(cocoa)
client (whipCocoa)
const extraShotCocoa = new ExtraShot(cocoa)
client (extraShotCocoa)
const extraShotWhipCocoa = new Whip(extraShotCocoa)
client (extraShotWhipCocoa)