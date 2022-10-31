
let NumberArray = [];
for (var i = 0; i < 10; i++) 
{
    NumberArray.push(Math.floor(Math.random() * 900 + 100));
}
console.log("Input numbers : "+NumberArray);
NumberArray.sort();
console.log("Sorted numbers array : "+NumberArray);

console.log("Second Smallest element : " + NumberArray[1]);
console.log("Second Largest element : " + NumberArray[8]);