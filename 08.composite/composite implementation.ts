// @ts-nocheck

interface Product{
    showInfo()
}


class ProductBox implements Product{
    boxName = ''
    productBox = []
    constructor(n){
        this.name = n
    }
    add(p){
        this.productBox.push(p)
    }
    showInfo() {
        let info = []
        console.log(this.boxName)
        for (let product of this.productBox){
            info.push(product.showInfo())
        }
        return info
    }
}

class Snack implements Product{
    name = ''
    constructor(n){
        this.name = n
    }
    showInfo() {
        return `snack name = ${this.name}`
    }
}

class Soda implements Product{
    name = ''
    sugar = ''
    constructor(n,s){
        this.name = n
        this.sugar = s
    }
    showInfo() {
        return `Soda name = ${this.name} and sugar = ${this.sugar}`
    }
}

function client(product){
    console.log(product.showInfo())
}

let snack1 = new Snack('lays')
let snack2 = new Snack('caramujo')

let soda1 = new Soda('coke',50)
let soda2 = new Soda('Pepsi max' , 0)

let hospitalProduct = new ProductBox()
hospitalProduct.add(snack1)
hospitalProduct.add(soda2)

let commonProduct = new ProductBox()

commonProduct.add(hospitalProduct)
commonProduct.add(snack2)
commonProduct.add(soda1)

console.log('--------- all product ------------')
client(snack1)
client(snack2)
client(soda1)
client(soda2)
console.log('-----------------------------------')

console.log('hospital Product')
client(hospitalProduct)
console.log('---------------')

console.log('common product')
client(commonProduct)
console.log('---------------------------')