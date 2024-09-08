//@ts-nocheck
interface ExchangeRateService {
    convert(amount: number, fromCurrency: string, toCurrency: string): number;
}

class BahtAdapter implements ExchangeRateService {
    convert(amount: number, fromCurrency: string, toCurrency: string): number {
        switch(toCurrency){
            case 'USD' : return amount / 33.74 ;
            case 'CNY' : return amount / 4.73 ;
            default : return amount ;
        }
    }
}

class USDAdapter implements ExchangeRateService {
    convert(amount: number, fromCurrency: string, toCurrency: string): number {
        switch(toCurrency){
            case 'THB' : return amount * 33.74 ;
            case 'CNY' : return amount * 7.09 ;
            default : return amount ;
        }
    }
}

class CNYAdapter implements ExchangeRateService {
    convert(amount: number, fromCurrency: string, toCurrency: string): number {
        switch(toCurrency){
            case 'USD' : return amount * 0.14 ;
            case 'THB' : return amount * 4.73 ;
            default : return amount ;
        }
    }
}

function exchange(amount: number, fromCurrency: string, toCurrency: string): number {
    let adapter: ExchangeRateService;
    switch (fromCurrency) {
        case 'THB':
            adapter = new BahtAdapter();
            break;
        case 'USD':
            adapter = new USDAdapter();
            break;
        case 'CNY':
            adapter = new CNYAdapter();
            break;
    }
    console.log(`${fromCurrency} to ${toCurrency}`)
    return adapter.convert(amount, fromCurrency, toCurrency);
}

function client(amount ,from ,to){
    return exchange(amount,from,to)
}

console.log(client(100, 'USD', 'THB'));
console.log(client(100, 'CNY','THB'));

console.log(client(100, 'THB', 'USD'));
console.log(client(100, 'THB' , 'CNY'));
