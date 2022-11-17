//New Promise
function getPromiseForUserData(){
    return new Promise((resolve) => {
      fetchDataFromServerAsync().then(function(user){
        resolve(user)
      })
    })
  }
  
  const promise = getPromiseForUserData()

//async funciton 

async function promise(){
    const user = await fetchDatafromServer()
    return user
}
const promise = getPromiseForUserData()