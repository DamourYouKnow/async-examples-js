function divide(a, b) {
    return new Promise(function(resolve, reject) {
        if (b === 0) {
            reject(Error('Divide by 0'));
        } else {
            resolve(a / b);
        }
    });
}

async function test() {
    try {
        console.log(await divide(10, 2));
        console.log(await divide(10, 0));
    } catch (err) {
        console.error(err);
    }
}

async function test2() {
    console.log(await divide(10, 2).catch((err) => console.error(err)))
    console.log(await divide(10, 0).catch((err) => console.error(err)))
}

test();