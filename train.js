//MITASK
const moment = require('moment');
class Shop {
    constructor(non, lagmon, cola) {
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola;
    }

    logTime(){
        return moment().format('HH:mm:ss')
    }
    qoldiq(){
        console.log(`Hozir ${this.logTime()}da ${this.non}ta non , ${this.lagmon}ta lagmon va ${this.cola}ta cola bor`)
    }
    sotish(product, quantity){
        if (this[product] !== undefined && this[product]>=quantity){
            this[product] -= quantity;
            console.log(`Hozir ${this.logTime()}da ${quantity}ta ${product} sotildi`)
        }else{
           console.log(`Hozir ${this.logTime()}da yetarli ${product} mavjud emas`)
        }
        }
        qabul(product,quantity){
            if(this[product] !== undefined){
                this[product] += quantity;
                console.log(`Hozir ${this.logTime()}da ${quantity}ta ${product} qabul qilindi`)
            }else {
             console.log(`Hozir ${this.logTime()}da bu mahsulot mavjud emas`)
            }
            }
            }

            const shop = new Shop(4, 5, 2)

            shop.qoldiq()
            shop.sotish('non', 3)
            shop.qabul('cola', 4)
            shop.qoldiq();