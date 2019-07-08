function divide(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject(Error('Divide by 0'));
        } else {
            resolve(a / b);
        }
    });
}

function add(a, b) {
    return new Promise((resolve) => resolve(a + b));
}

Promise.all([divide(10, 2), add(2, 2)])
    .then((results) => results.forEach((result) => console.log(result)))
    .catch((err) => console.error(err));

Promise.all([divide(10, 2), add(2, 2)]).then(([quotient, sum]) => {
    console.log(quotient);
    console.log(sum);
}).catch((err) => console.error(err));

Promise.all([divide(10, 0), add(2, 2)]).then(([quotient, sum]) => {
    console.log(quotient);
    console.log(sum);
}).catch((err) => console.error(err));