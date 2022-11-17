//Promises in javascript.
//promises are the modern way to write asynchronous code
//we use the promise object 

const promise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
                if(getRandomBol()){
                        resolve("resolved");
                }       
                else{
                    reject("rejected");
                }
            },1000)
        })
function getRandomBol(){
    return Math.random() < .5
}