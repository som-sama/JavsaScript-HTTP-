//Promises in javascript.
//promises are the modern way to write asynchronous code
//we use the promise object 



/* 
        Declaring a Promise
        Here is example of a 
        promise that will resolve and return the string "resolved!" or reject and return the string "rejected!" after 1 second. 
*/


const promise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
                if(getRandomBol()){
                        resolve("resolved!")
                }       
                else{
                    reject("rejected!")
                }
            },1000)
        })
function getRandomBol(){
    return Math.random() < .5
}