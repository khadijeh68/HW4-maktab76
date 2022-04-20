//Ex.2 with for
// function sumOfIntegers(arr){
//   let sum = 0;
//   for (let i = 0 ; i<arr.length ; i++){ 
//     sum = sum + arr[i];
//   }
//     return sum;
// }
// var array = [1, 2, 3, 4, 5, 6];
// console.log(sumOfIntegers(array));

//Ex.2 with reduce
function sumOfIntegers(arr){
    let getSum = arr.reduce(function(acc , val){
      return acc + val;
    }, 0);
    console.log(getSum);
  }
var array = [1, 2, 3, 4, 5, 6];
sumOfIntegers(array);