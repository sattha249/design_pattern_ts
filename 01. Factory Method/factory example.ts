interface FriedFruit{ 
    fry() : string;
    slice() : string;
    peel() : string;
}

class Banana implements FriedFruit{
    fry():string {return 'fry banana'}
    slice():string {return 'slice banana'}
    peel():string {return 'peel banana'}
}

class Taro implements FriedFruit{
    fry():string {return 'fry Taro'}
    slice():string {return 'slice Taro'}
    peel():string {return 'peel Taro'}
}

class Durian implements FriedFruit{
    fry():string {return 'fry Durian'}
    slice():string {return 'slice Durian'}
    peel():string {return 'peel Durian'}
}

abstract class CookingFruit{
    abstract getFriedFruit() : FriedFruit;
    fry(){
        let fruit = this.getFriedFruit()
        console.log('cooking fruit')
        console.log(fruit.peel())
        console.log(fruit.slice())
        console.log(fruit.fry())
    }
}

class CookingBanana extends CookingFruit{
    getFriedFruit(): FriedFruit{
        return new Banana
    }
}

class CookingTaro extends CookingFruit{
    getFriedFruit(): FriedFruit{
        return new Taro
    }
}

class CookingDurian extends CookingFruit{
    getFriedFruit():FriedFruit{
        return new Durian
    }
}

function client(cook : CookingFruit){
    cook.fry()
}

let cook : CookingFruit = new CookingBanana
client(cook)
cook = new CookingTaro
client(cook)
cook = new CookingDurian
client(cook)