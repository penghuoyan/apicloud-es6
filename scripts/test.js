let s ='ssssss'
async function test(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve('hello world') 
        }, 5000);
    })
}


async function test2(){
    let s = await test();
    console.log(s);
}


test2()