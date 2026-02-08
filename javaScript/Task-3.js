// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

let nums = [4, 6, 25, 6, 8, 9, 7];

function make_avg(nums, size) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    let average = sum / size;
    return average;
}

let result = make_avg(nums, nums.length);
console.log(result);