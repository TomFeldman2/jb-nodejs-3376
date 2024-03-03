const howManyCandlesCallback = (dayNumber, callback) => {
    if ( dayNumber < 1 ) {
        return callback ('day cannot be smaller than 1');
    }

    if ( dayNumber > 8 ) {
        return callback ('No Isro Chag for Hannukah!');
    }

    return callback ( null, dayNumber + 1 );
}

function countDays(i, total) {
    if (i == 0) {
        return console.log(total);
    }

    howManyCandlesCallback(i, (err, cnt) => countDays(i - 1, total + cnt));
}


console.log(countDays(8, 0));