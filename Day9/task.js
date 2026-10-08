// task 
let rollnum=[12,34,45,34,56]
console.log(rollnum);
console.log(rollnum.reverse());

let primary =["shiva","alam","deepak"];
let secondary =["aman","rakesh","vikash"];
console.log(primary.concat(secondary));


let nums= [18,20,25,34,19,10,21,22];
let data =nums.filter(function(value){
    return value > 20;
});
console.log(data);

let name=["deepak","alam","shiva"];
let name2=name.filter(function(value){
    return value.length > 4 ;
});
console.log(name2);

let nums2 = [ 10,15,20,25];
let data2 = nums2.filter( (value)=>{
    return value >15;
});
console.log(data2);


