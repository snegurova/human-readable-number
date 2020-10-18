module.exports = function toReadable(number) {
    const arrOfNumber = number.toString().split('');
    const upToTwenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
        'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
        'eighteen', 'nineteen'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
        'ninety'];
    if (number === 0) return 'zero';
    if (number < 20) {
        return upToTwenty[number];
    }

    if (number >= 20 && number < 100) {
        if (arrOfNumber[1] === 0) {
            return tens[arrOfNumber[0]];
        } else {
            return `${tens[arrOfNumber[0]]} ${upToTwenty[arrOfNumber[1]]}`.trim();
        }
    }

    if (number >= 100) {
        if (arrOfNumber[2] === '0') {
            if (arrOfNumber[1] === '0') {
                return `${upToTwenty[arrOfNumber[0]]} hundred`.trim();
            } else {
                return `${upToTwenty[arrOfNumber[0]]} hundred ${tens[arrOfNumber[1]]}`.trim();
            }
        }
        if (arrOfNumber[1] === '0' || arrOfNumber[1] === '1') {
            let index = + `${arrOfNumber[1]}${arrOfNumber[2]}`
            console.log(index);
            return `${upToTwenty[arrOfNumber[0]]} hundred ${upToTwenty[index]}`.trim();
        } else {
            return `${upToTwenty[arrOfNumber[0]]} hundred ${tens[arrOfNumber[1]]} ${upToTwenty[arrOfNumber[2]]}`.trim();
        }

    }
}
