module.exports = function toReadable(number) {
    let result = [];
    let localNumber = number;
    const readableNumbers = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    const readableTeens = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    const readableTens = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    if (number === 0) {
        return "zero";
    }

    if (String(localNumber).length > 2) {
        const hundred = Math.floor(localNumber / 100);
        localNumber = localNumber % 100;
        result.push(`${readableNumbers[hundred]} hundred`);
    }
    if (String(localNumber).length > 1) {
        const tens = Math.floor(localNumber / 10);
        if (tens === 1) {
            result.push(readableTeens[localNumber]);
            return result.join(" ");
        } else {
            localNumber = localNumber % 10;
            result.push(readableTens[tens]);
        }
    }
    if (localNumber !== 0) {
        result.push(readableNumbers[localNumber]);
    }
    return result.join(" ");
};
