//@ts-nocheck

interface IVendingMachineShop{
    sellVendingMachine()
}

class VendingMachineShop implements IVendingMachineShop {
    sellVendingMachine(info) {
        return `send to : ${info.name} `
    }
}

class ProxyVendingMachineShop implements IVendingMachineShop{
    public VendingMachineShop

    constructor(s){
        this.VendingMachineShop = s
    }
    sellVendingMachine(info) {
        let result = "buy via proxy : "
        if (info.promotion == 'discount'){
            result += ' have discount 50%, '
        }
        if (info.promotion == 'gift set'){
            result += ' free gift set, '
        }
        else{
            result += ' no promotion!!, '
        }
        return result += this.VendingMachineShop.sellVendingMachine(info)
    }
}

function client(shop,info){
    console.log(shop.sellVendingMachine(info))
}

let directSell = new VendingMachineShop
let ProxySell = new ProxyVendingMachineShop(directSell)
let discountBuy = {
      name : 'customerA'
     ,promotion:'discount'}
let giftBuy = {name : 'customerB' ,promotion:'gift set'}
let noPromotion  = {name : 'customerC'}
console.log('direct sell')
client(directSell ,discountBuy)
client(directSell , giftBuy)
client(directSell,noPromotion)
console.log('--------------------------')
console.log('proxy sell')
client(ProxySell ,discountBuy)
client(ProxySell , giftBuy)
client(ProxySell,noPromotion)
