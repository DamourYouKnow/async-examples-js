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

divide(10, 2)
    .then((result) => add(result, 3))
    .then((result) => console.log(result))
    .catch((err) => console.err(err));

divide(10, 0)
    .then((result) => add(result, 3))
    .then((result) => console.log(result))
    .catch((err) => console.err(err));
