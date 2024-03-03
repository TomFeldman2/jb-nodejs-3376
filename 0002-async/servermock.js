const howManyCandlesCallback = (dayNumber, callback) => {
    if ( dayNumber < 1 ) {
        return callback ('day cannot be smaller than 1');
    }

    if ( dayNumber > 8 ) {
        return callback ('No Isro Chag for Hannukah!');
    }

    return callback ( null, dayNumber + 1 );
}

const howManyCandlesPromise = (dayNumber) => {
    return new Promise((resolve, reject) => {
        howManyCandlesCallback(dayNumber, (err, value) => {
            if (err) {
                return reject(err);
            }

            return resolve(value)
        })
    })
}

function countDaysCallback(i, total) {
    if (i === 0) {
        return console.log(total);
    }

    howManyCandlesCallback(i, (err, cnt) => countDaysCallback(i - 1, total + cnt));
}

function countDaysPromise() {
    days = Array.from({length: 8}, (_, i) => i + 1);
    return Promise.all(days.map(day => howManyCandlesPromise(day)))
        .then(counts => counts.reduce((partialSum, c) => partialSum + c))
        .then(sum => console.log(sum))
}


countDaysPromise()