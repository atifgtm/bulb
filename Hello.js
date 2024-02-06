// promise

setInterval(function(){
    document.write("wow!")
},2000)

setTimeout(function(){
    console.log("wah bhai")
},3000)

// frist PROMISE
let promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("this is first promise!")
    })
})

//second promise

let promiseTwo = new Promise (function(resolve , reject){
    setTimeout(function(){
        resolve ({name : "henry" ,email :"henry@gmail.com"})
    })
})

promiseTwo.then(function(user){
    console.log(user);
})

// Three promise

let promiseThree = new Promise (function(resolve , reject){
    setTimeout(function(){
        resolve ({username : "mike" , pawword : "12345"})
    },4000)
})

promiseThree.then(function(myuser){
    return myuser.password;
})
.then(function(apple){
    console.log(apple)
})

// four promise 

let promisefour = new Promise (function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if (!error){
            resolve({name : "CEMAL" , password : "122345"})
        }else{
            reject("ERROR : SOMETHING WENT WRONG HERE!")
        }
    },4000)
})

promisefour
.then(function(userData){
    return userData.name
})
.then(function(myData){
    console.log(myData);
})

.catch(function(error){
    console.log(error);
})

.finally(function(){
    console.log("FINALLY!");
})
 
//FIVE PROMISE
let promisefive = new Promise (function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if (!error){
            resolve({car : "HONDA" , colour : "white"})
        }else{
            reject("ERROR : THIS CAR IS NO LONGER EXIST IN STOCK!")
        }
    },4000)
})


