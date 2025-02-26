console.log("Jack Ma maslahatlari")
const list = [
    "yaxshi talaba boling", //10-20
     "togri boshliq tanlang va koproq xato qiling", //20-30
     "uzingizga ishlashingizni boshlang", //30-40
     "siz kuchli bolgan narsalarni qiling",//40-50
     "yoshlarga investitsiya qiling",//50-60
     "never give up"]

     async function maslahatBering(a ) {
        if(typeof a !== "number") throw new Error ('insert a number');
        else if(a >20 && a<=30) return list[1]
            else if(a>30 && a<=40) return list[2]
                else if(a > 40 && a<=50)return list[3]
                    else if(a > 50  && a<=60) return list[4]
                        else if(a < 50 && a<=70)return list[5]
                        else{
                       return new Promise((resolve,reject)=>{
                        setInterval(()=>{
                            resolve(list[2])
                        })
                       },5000)
                    }
                }
                      
                  
                


     
     

     async function run() {
        let javob = await maslahatBering(25)
        console.log(javob)
       
     }

     run();