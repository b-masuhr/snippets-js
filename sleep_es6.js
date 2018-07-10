    
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function myAsyncFunction(){
    console.time('myAsyncFunction')
    await sleep(3000)
    console.timeEnd('myAsyncFunction')
}

myAsyncFunction()
