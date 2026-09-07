//Numeros
//Ex1
function Sum(n1,n2){
    return n1+n2
}
//Ex2
function Rest(n1,n2){
    return n1-n2
}
//Ex3
function Mult(n1,n2){
    return n1*n2
}
//Ex4
function Sum(n1,n2){
    return n1/n2
}
//Ex5
function Pow(n1,n2){
    return n1**n2
}
//Ex6
function Rem(n1,n2){
    return n1%n2
}
//Ex7
function Sqrt(n1){
    return n1**(1/2)
}
//Ex8
function Abs(n1){
    return n1>=0?n1:-n1
}
//Ex9 
function Redom(n1){
    let cmp= parseInt(n1)
    return n1>=0?n1-cmp<0.5?cmp:cmp+1:cmp-n1<0.5?cmp:cmp-1
}
//Ex10
function Random(){
    const lol =new Date().getSeconds()
    return ((1/Date.now())**(1/12))*(1/lol)
}
//Letras 
//Ex1
function Concat(cad1,cad2){
    return cad1+cad2
}
//Ex2
function Long(cad1){
    return cad1.length
}
//Ex3
function Upper(cad1){
    return cad1.toUpperCase()
}
//Ex4
function Lower(cad1){
    return cad1.toLowerCase()
}
//Ex5
function Index(cad1,x){
    return cad1[x]
}
//Ex6
function Reverse(cad1){
    return cad1.split("").reverse().join("")
}
//Ex7
function Search(cad1,car1){
    let count=0
    for(x of cad1){
        if(x===car1){
            count++
        }
    }
    return count
}
//Ex8
function withoutBlank(cad1){
    return cad1.split(" ").join("")
}
//Ex9
function IsPalimdrome(cad1){
    return cad1===Reverse(cad1)
}
//Ex10
function UpperPhrase(cad1){
    return cad1.split(" ").map(p => p[0].toUpperCase() + p.slice(1)).join(" ");
}
//Arrays
//Ex1
function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}
//Ex2
function averageArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum / arr.length;
}
//Ex3
function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}
//Ex4
function greaterThan(arr, number) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > number) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}
//Ex5
function combineArrays(arr1, arr2) {
  let newArray = [];

  for (let i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    newArray.push(arr2[i]);
  }

  return newArray;
}
//Ex6
function maxNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
//Ex7
function minNumber(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
//Ex8
function countElement(arr, element) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++;
    }
  }
  return count;
}
//Ex9
function removeDuplicates(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
//Ex10
function reverseArray(arr) {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}