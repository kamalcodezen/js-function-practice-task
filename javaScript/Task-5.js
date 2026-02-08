// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(nums) {
    if (nums % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let number = 25;
console.log(odd_even(number));



function odd_even_1(nums) {
    return nums % 2 === 0 ? "Even" : "Odd";
}

console.log(odd_even_1(2));