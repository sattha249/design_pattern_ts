
/*
 robot :
 appearance : human , metal skin , animal
 Type of use : house work , labor , babysitter  
*/


interface RobotFactory {
    createHouseworkRobot() :Housework
    createLaborRobot() :Labor
    createBabysitterRobot() :Babysitter
}

class HumanRobotFactory implements RobotFactory{
    createHouseworkRobot():Housework {return new HumanHouseworkRobot}
    createLaborRobot():Labor{return new HumanLaborRobot}
    createBabysitterRobot():Babysitter {return new HumanBabysitterRobot}
}

class MetalSkinRobotFactory implements RobotFactory{
    createHouseworkRobot():Housework  {return new MetalSkinHouseworkRobot}
    createLaborRobot():Labor  {return new MetalSkinLaborRobot}
    createBabysitterRobot():Babysitter {return new MetalSkinBabysitterRobot}
}

class AnimalRobotFactory implements RobotFactory{
    createHouseworkRobot():Housework {return new AnimalHouseworkRobot}
    createLaborRobot():Labor {return new AnimalLaborRobot}
    createBabysitterRobot():Babysitter  {return new AnimalBabysitterRobot}
}

interface Housework {
    do() : string 
    combine(r : Housework) :string
}

interface Labor {
    do() : string 
    combine(r : Labor) : string
}

interface Babysitter {
    do()  : string 
    combine(r : Babysitter)  : string 
}

class HumanHouseworkRobot implements Housework{
    result :string = 'Human Robot do Housework'
    do() : string {return this.result}
    combine(r : Housework){return `${this.result} AND ${r.do()}`}
}
class MetalSkinHouseworkRobot implements Housework{
    result = 'MetalSkin Robot do Housework'
    do() : string {return this.result}
    combine(r :Housework ) {return `${this.result} AND ${r.do()}`}
}
class AnimalHouseworkRobot implements Housework{
    result = 'Animal Robot do Housework'
    do() : string {return this.result}
    combine(r :Housework ) {return `${this.result} AND ${r.do()}`}
}

class HumanLaborRobot implements Labor{
    result = 'Human Robot do Labor'
    do() : string {return this.result}
    combine(r :Labor) : string {return `${this.result} AND ${r.do()}`}
}
class MetalSkinLaborRobot implements Labor{
    result = 'MetalSkin Robot do Labor'
    do() : string{return this.result}
    combine(r : Labor){return `${this.result} AND ${r.do()}`}
}
class AnimalLaborRobot implements Labor{
    result = 'Animal Robot do Labor'
    do() : string{return this.result}
    combine(r :Labor){return `${this.result} AND ${r.do()}`}
}

class HumanBabysitterRobot implements Babysitter{
    result = 'Human Robot do Babysitter'
    do() : string{return this.result}
    combine(r : Babysitter){return `${this.result} AND ${r.do()}`}
}
class MetalSkinBabysitterRobot implements Babysitter{
    result = 'MetalSkin Robot do Babysitter'
    do() : string{return this.result}
    combine(r : Babysitter ){return `${this.result} AND ${r.do()}`}
}
class AnimalBabysitterRobot implements Babysitter{
    result = 'Animal Robot do Babysitter'
    do() : string{return this.result}
    combine(r : Babysitter){return `${this.result} AND ${r.do()}`}
}

function client(factory : RobotFactory){
    let houseworkRobot : Housework = factory.createHouseworkRobot()
    let laborRobot : Labor = factory.createLaborRobot()
    let babysitterRobot : Babysitter = factory.createBabysitterRobot()
    console.log(houseworkRobot.do())
    console.log(laborRobot.do())
    console.log(babysitterRobot.do())
    // ส่งอย่างอื่นไป mix ก็ได้ เช่น หุ่นยนต์แม่บ้าน สามารถเลี้ยงเด็กได้ด้วย
   console.log(houseworkRobot.combine(babysitterRobot))
}

let humanRobot :RobotFactory = new HumanRobotFactory
let metalSkinRobot :RobotFactory = new MetalSkinRobotFactory
let AnimalRobot :RobotFactory = new AnimalRobotFactory
console.log('------ Human robot Factory -----')
client(humanRobot)
console.log('------ MetalSkin robot Factory -----')
client(metalSkinRobot)
console.log('------ Animal robot Factory -----')
client(AnimalRobot)