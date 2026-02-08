// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

const binaryString = "101010";

function count_zero(nums) {

    let count = 0;
    for (let num of nums) {
        if (num === "0") {
            count++;
        }
    }
    return count;
}

let result = count_zero(binaryString);
console.log(result);