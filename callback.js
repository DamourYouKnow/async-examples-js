function divide(a, b, callback) {
    if (b === 0) {
        callback(Error('Divide by 0'));
    } else {
        callback(null, a / b);
    }
}

divide(10, 2, function(err, result) {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
}) 

divide(10, 0, function(err, result) {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
}) 