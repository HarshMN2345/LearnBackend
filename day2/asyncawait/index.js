function greet(name){
    return new Promise((resolve, reject) => {
        if (typeof name !== 'string') {
            reject("Name must be a string");
        }
        setTimeout(() => {
            resolve(`Hello ${name}`);
        }, 2000);
    });
}

async function delaygreet(){
    const greeting = await greet("John");
    console.log(greeting);
}
delaygreet();