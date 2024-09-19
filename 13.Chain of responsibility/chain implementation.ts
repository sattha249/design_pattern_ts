//@ts-nocheck
interface CookingHandler {
    setNext(handler: CookingHandler): CookingHandler;
    cook(info: string): void;
}

class Cooking implements CookingHandler {
    private nextHandler: CookingHandler;

    setNext(handler: CookingHandler): CookingHandler {
        this.nextHandler = handler;
        return handler; 
    }

    cook(info: string): void {
        if (this.nextHandler) {
            this.nextHandler.cook(info);
        }
    }
}

class Cutting extends Cooking {
    cook(info: string): void {
        if (info != "done at cut") {
            console.log("Cutting ingredients...");
            super.cook(info);
        }
        else{
            console.log('cutting done')
        } 
    }
}

class Marinating extends Cooking {
    cook(info: string): void {
        if (info != "done at marinate") {
            console.log("Marinating ingredients...");
            super.cook(info);
        } else{
            console.log('Marinating done')
        } 
    }
}

class Ripening extends Cooking {
    cook(info: string): void {
        if (info != "done at ripe") {
            console.log("Ripening ingredients...");
            super.cook(info);
        }
        else{
            console.log('ripe done')
        } 
        
    }
}

class Serving extends Cooking {
    cook(info: string): void {
        console.log("Serving the dish...");
    }
}


const cutting = new Cutting();
const marinating = new Marinating();
const ripening = new Ripening();
const serving = new Serving();


cutting.setNext(marinating).setNext(ripening).setNext(serving);


console.log('*start at cut done at ripe*')
cutting.cook('done at ripe')
console.log('  ')


console.log('*start at marinate done at serve*')
marinating.cook('done at ...')
console.log('  ')

console.log('*start at ripe done at serve*')
ripening.cook('done at ')
console.log('  ')

console.log('*start at marinate done at marinate*')
marinating.cook('done at marinate')
console.log('  ')