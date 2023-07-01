const theOneFunc = (wait:number) => {
    console.log("Hello after " + wait + " seconds");
}

setTimeout(theOneFunc, 4*1000, 4);
setTimeout(theOneFunc, 8*1000, 8);