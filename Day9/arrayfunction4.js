let name = ["rohan", "vivek", "ajay", "raj", "max"];
console.log(name);

// 15.splice ()- can add ,remove , or replace elements .
// .remove elements 
// 1.start from index 1 (vivek)
// 2.remove 2 elements (vivek and ajay)
name.splice(2, 3);
console.log(name);


let nam = ["rohan", "vivek", "ajay", "raj", "max"];
// .Add 
//  1 -> start at index 1
//  0 -> don't remove anything 
// "rahul" - add rahul
console.log(nam);
nam.splice(4, 0, "karan", "alam");
console.log(nam);

//. replace an element 
// go to index 1 -> remove 1 element -> add "rahul"
let data = ["rohan", "vivek", "ajay", "raj", "max"];
data.splice(0, 3, "rahul", "max")
console.log(data);

// 16.concat()- combines two array.
let namedata = ["rohan", "vivek", "ajay"];
let othername = ["rahul", "amit"];

let result2 = namedata.concat(othername);
console.log(result2);

// 17. every()- checks whether all elements satisfy a condition.
let data1 = ["rohan", "ajay", "vivek", "max"];
let res = data1.every((value) => {
    return value.length >= 4;
});
console.log(res);

// 18.some()- checks whether at least one element satisfy a condition .
let rest = data1.some((value) => {
    return value === "vivek";
});
console.log(rest);





