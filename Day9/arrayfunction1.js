let array=["alam","deepak",1,2,23,3,true]
console.log(array);
console.log(array[1]);

// types of array function . 

// 1 length - returns the number of element 
console.log(array.length);

// 2. push() - adds an element at the end 
array.push("shiva");
console.log(array);

// 3. POP() - removes the last element .
array.pop();
console.log(array);

// 4.unshift() - adds an element at the beginning .
array.unshift("shiva");
console.log(array);

// 5. shift() - removes the first element 
array.shift();
console.log(array);

// 6.reverse() - reverse an element
console.log(array.reverse());

// 7.includes() - checks whether an element exists. it also consider a gap .
console.log(array.includes("shiva"));







