/*console.log("Jack Ma maslahatlari")
const list = [
    "yaxshi talaba boling", //10-20
     "togri boshliq tanlang va koproq xato qiling", //20-30
     "uzingizga ishlashingizni boshlang", //30-40
     "siz kuchli bolgan narsalarni qiling",//40-50
     "yoshlarga investitsiya qiling",//50-60
     "endi dam oling , foydasi yoq endi",//70-80
];
//ASYNC functions
//async function maslahatBering(a) {
    //if(typeof a !== 'number') throw new Error("insert number", null)
        //else if(a<=20) return(null, list[0])
        //else if(a>20 && a<=30)return(null, list[1])
        //else if(a>30 && a<=40)return(null, list[2])
        //else if(a>40 && a<=50)return(null, list[3])
        //else if(a>50 && a<=60)return(null, list[4])
       // else {
        
            /*return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve(list[5]);
                },5000)
            })*/

            //return new Promise((resolve, reject)=>{
                //setInterval(()=>{
                    //resolve(list[5]);
                //},1000)
           // })
              
   // }
//}

/* setTimeout(function(){
                callback(null, list[5])
               }, 5000);*/

/*maslahatBering(25, (err, data)=>{
    if(err) console.log('ERROR:', err)
        console.log("javob:", data);*/
    
    //call via then.catch
    /*console.log('passed here 0')
    maslahatBering(25).then(data=>{
    console.log(`javob:`,data)
    })
    .catch(err=>{
console.log(`javob:`,err)
    })
    console.log('passed here 1')*/
    //call via async/awaitfunctions
    //async function run(){
        //let javob = await maslahatBering(65);
        //console.log(javob);
        //javob = await maslahatBering(31)
        //console.log(javob)
        //javob = await maslahatBering(41)
        //console.log(javob)
       
    //}
    //run();

  //CALLBACK functions
    /*function maslahatBering(a, callback) {
    if(typeof a !== 'number')callback("insert number", null)
        else if(a<=20) callback(null, list[0])
        else if(a>20 && a<=30)callback(null, list[1])
        else if(a>30 && a<=40)callback(null, list[2])
        else if(a>40 && a<=50)callback(null, list[3])
        else if(a>50 && a<=60)callback(null, list[4])
       else {
    setInterval(function(){
        callback(null, list[5])
    },1000)
       }
    }

        console.log('passed here 0')
    maslahatBering(70, (err,data)=>{
    if(err) console.log("ERROR:", err);
    else{
        console.log(data)
    }
    })
    console.log('passed here 1')*/




    //MITASK

    function countLetter(letter,word) {
        let count = 0;

        for(let i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                count++;
            }
        }
        return count;
    }

    console.log(countLetter("i", "movie"))


 

