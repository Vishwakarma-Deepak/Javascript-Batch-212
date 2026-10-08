let name =["Rohan","Vivek","Ajay","alam","raj","deepak"];
console.log(name);

// for (let i=1; i<4;i++){
//     console.log(name[i]);
// }

for (let j=5; j>=0; j--){
    console.log(name[j]);
    
}
// 8. forEach() - executes a function for each element .
name.forEach(function(value){
    console.log(value);
    
});
// 9.map() - creates a new array by modifying every element .
let result =   name.map(function(value){
    return value.toUpperCase();
});
console.log(result);

// 10.filter - creates a new array containing elements that satisfy a condition or not.
let resu=name.filter(function(value){
    return value.length > 4;
});
console.log(resu);

// 11.find() - returns the first element that satisfy the condition.
let nums= [10,20,30,40];
console.log(nums.find(x => x > 20));
console.log(nums);

let ult=name.find((value)=>{
    return value.length > 4;

});
console.log(ult);



