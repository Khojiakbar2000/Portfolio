//MITASK

function countDigits(str){
    let count = 0;

    for ( let i = 0; i < str.length ; i++) {
        if(str[i]>='0' && str[i]<='9') {
            count++
        }
    }
    return count;
}

console.log(countDigits("bro5how6"))



 

