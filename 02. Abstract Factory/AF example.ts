// @ts-nocheck

/* สร้าง interface แต่ละ Product
    เช่น Banana ก็จะมี interface ของ Banana แล้วค่อยมี class
    FriedBanana , StirBanana , Syrup Banana ที่ implements มาจาก interface Banana
    ต้องมี creation methods 

    ตัวอย่าง 
    Interface : Banana , FruitFactory
    class : FriedFruitFactory , StirFruitFactory , SyrupFruitFactory

    interface ถ้า implements เป็นเส้นประ inherit เป็นเส้นทึบ  ลูกศรหัวโปร่งเหมือนกัน
*/

interface FruitFactory {
    createBanana()
    createTaro()
    createDurian()
}

class FriedFruitFactory implements FruitFactory{
    createBanana(){}
    createTaro(){}
    createDurian(){}
}

class StirFruitFactory implements FruitFactory{
    createBanana(){}
    createTaro(){}
    createDurian(){}
}

class SyrupFruitFactory implements FruitFactory{
    createBanana(){}
    createTaro(){}
    createDurian(){}
}

interface Banana {
    cook()
}

interface Taro {
    cook()
}

interface Durian {
    cook()
}