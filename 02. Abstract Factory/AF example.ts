//@ts-nocheck

/* สร้าง interface แต่ละ Product
    เช่น Banana ก็จะมี interface ของ Banana แล้วค่อยมี class
    FriedBanana , StirBanana , Syrup Banana ที่ implements มาจาก interface Banana
    ต้องมี creation methods 

    ตัวอย่าง 
    Interface : Banana , FruitFactory
    class : FriedFruitFactory , StirFruitFactory , SyrupFruitFactory
    inherit : FriedBanana , StirBanana,SyrupBanana ---> Banana

    ข้อดี 
    - มั่นใจว่า product ต่างๆจาก factory เข้ากันได้
    - ลดการขึ้นต่อกันระหว่าง concrete product กับ client
    - Single responsibility principle
        - สามารถนำโค้ดที่ใช้สร้าง product ไปไว้ที่เดียวกัน
    - Open/Closed principle
        - สามารถสร้าง product ได้โดยไม่กระทบกับโค้ดเดิม
    
    ข้อเสีย
        - โคตรซับซ้อน
*/

interface FruitFactory {
    createBanana()
    createTaro()
    createDurian()
}

class FriedFruitFactory implements FruitFactory{
    createBanana(){ return new FriedBanana()}
    createTaro(){ return new FriedTaro()}
    createDurian(){return new FriedDurian()}
}

class StirFruitFactory implements FruitFactory{
    createBanana(){ return new StirBanana()}
    createTaro(){ return new StirTaro()}
    createDurian(){ return new StirDurian}
}

class SyrupFruitFactory implements FruitFactory{
    createBanana(){ return new SyrupBanana()}
    createTaro(){ return new SyrupTaro()}
    createDurian(){ return new SyrupDurian()}
}

interface Banana {
    cook()
    mix(f)
}

interface Taro {
    cook()
    mix(f)
}

interface Durian {
    cook()
    mix(f)
}

class FriedBanana implements Banana{
    cook(){return 'fried banana'}
    mix(f) { return `fried banana + ${f.cook()}` }
}

class FriedTaro implements Taro{
    cook(){return 'fried taro'}
    mix(f) { return `fried taro + ${f.cook()}` }
}

class FriedDurian implements Durian{
    cook(){return 'fried durian'}
    mix(f) { return `fried durian + ${f.cook()}` }
}

class StirBanana implements Banana{
    cook(){return 'stir banana'}
    mix(f) { return `stir banana + ${f.cook()}` }
}

class StirTaro implements Taro{
    cook(){return 'stir taro'}
    mix(f) { return `stir taro + ${f.cook()}` }
}

class StirDurian implements Durian{
    cook(){return 'stir durian'}
    mix(f) { return `stir durian + ${f.cook()}` }
}

class SyrupBanana implements Banana{
    cook(){return 'syrup banana'}
    mix(f) { return `syrup banana + ${f.cook()}` }
}

class SyrupTaro implements Taro{
    cook(){return 'syrup taro'}
    mix(f) { return `syrup taro + ${f.cook()}` }
}

class SyrupDurian implements Durian{
    cook(){return 'syrup durian'}
    mix(f) { return `syrup durian + ${f.cook()}` }
}

function client(factory){
    let banana = factory.createBanana()
    let taro = factory.createTaro()
    let durian = factory.createDurian()
    console.log(banana.cook())
    console.log(taro.cook())
    console.log(durian.cook())
    // ส่งอย่างอื่นไป mix ก็ได้
    console.log(banana.mix(taro))   
    console.log(durian.mix(banana))
    console.log(taro.mix(durian))
}

let fry = new FriedFruitFactory
let stir = new StirFruitFactory
let syrup = new SyrupFruitFactory
console.log('-----fried-----')
client(fry)
console.log('-----stir-----')
client(stir)
console.log('-----syrup-----')
client(syrup)