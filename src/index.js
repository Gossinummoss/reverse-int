module.exports = function reverse (n) {
    let  reverseNum = Number(n.toString().split("").reverse().join(""));
    let reverseNegativeNum = Number(n.toString().split("").reverse().join("").split("-").join(''));

    if (n < 0) {
        return reverseNegativeNum
    } else if (n >= 0) {
        return reverseNum
    }
}
