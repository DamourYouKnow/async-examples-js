function divide(a, b) {
    return new Promise(function(resolve, reject) {
        if (b === 0) {
            reject(Error('Divide by 0'));
        } else {
            resolve(a / b);
        }
    });
}

divide(10, 2)
    .then((result) => console.log(result))
    .catch((err) => console.error(err))


divide(10, 0)
    .then((result) => console.log(result))
    .catch((err) => console.error(err))