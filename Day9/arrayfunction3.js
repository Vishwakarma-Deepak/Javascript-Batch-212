let name = ["Rohan","Vivek","Ajay","Ajay"];
// 12.findIndex() - returns the index of the first matching element .

let result=name.findIndex((value)=>{
    return value === "Ajay";
});
console.log(result);

// 13.join() - converts a array element into string.
let joindata = name.join(" ");
console.log(joindata);

// sorting 
// sorts the element of an array
// 1. sorting numbers - ascending .syntax is fix of writing ascending and descending 
let nums = [50,10,5,40,20];
nums.sort(function(a,b){
    return a - b;
});
console.log(nums);
// 2.sorting numbers - descending .
nums.sort(function(a,b){
    return b - a;
});
console.log(nums);

//14. slice() - copies a portion of an array without changing the original array 
// start at index 0
// stop before index n.

let name2=["rohan","vivek","ajay","raj","max"];
let result2 =name2.slice(0,3);
console.log(result2);




