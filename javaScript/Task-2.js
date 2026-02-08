// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function checkOddEven(nums) {
    if (nums % 2 !== 0) {
        let mul = nums * 2;
        return mul;
    } else {
        let divide = nums / 2;
        return divide;
    }
}

console.log(checkOddEven(20));





function checkNumbers(nums) {

    return nums % 2 === 1 ? nums * 2 : nums / 2;
}

console.log(checkNumbers(25));