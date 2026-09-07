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
//Object
//Ex1
function getName(obj) {
  return obj.name;
}
//Ex2
function updateAge(obj, newAge) {
  obj.age = newAge;
}
//Ex3
function addProperty(obj, propName) {
  obj[propName] = null;
}
//Ex4
function deleteProperty(obj, propName) {
  delete obj[propName];
}
//Ex5
function countProperties(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  return count;
}
//Ex6
function hasProperty(obj, propName) {
return (obj[propName] !== undefined)
} 
//Ex7
function getValues(obj) {
  let values = [];
  for (let key in obj) {
    values.push(obj[key]);
  }
  return values;
}
//Ex8
function areEqual(obj1, obj2) {
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  for (let key in obj2) {
    if (obj2[key] !== obj1[key]) {
      return false;
    }
  }
  return true;
}
//Ex9
function copyObject(obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
}
//Ex10
function mergeObjects(obj1, obj2) {
  let newObj = {};
  for (let key in obj1) {
    newObj[key] = obj1[key];
  }
  for (let key in obj2) {
    newObj[key] = obj2[key];
  }
  return newObj
}
//------------------------------------
// NUMBERS
//------------------------------------

//Ex1 Sum
console.log("Prueba del ejercicio 1 de la categoría Números");
console.log(Sum(2,3));
console.log(Sum(10,5));
console.log(Sum(-4,7));

//Ex2 Rest
console.log("Prueba del ejercicio 2 de la categoría Números");
console.log(Rest(10,3));
console.log(Rest(5,20));
console.log(Rest(-4,-10));

//Ex3 Mult
console.log("Prueba del ejercicio 3 de la categoría Números");
console.log(Mult(2,3));
console.log(Mult(10,0));
console.log(Mult(-4,7));

//Ex4 Sum (DIV)
console.log("Prueba del ejercicio 4 de la categoría Números");
console.log(Sum(10,2));
console.log(Sum(9,3));
console.log(Sum(5,2));

//Ex5 Pow
console.log("Prueba del ejercicio 5 de la categoría Números");
console.log(Pow(2,3));
console.log(Pow(5,2));
console.log(Pow(10,0));

//Ex6 Rem
console.log("Prueba del ejercicio 6 de la categoría Números");
console.log(Rem(10,3));
console.log(Rem(20,7));
console.log(Rem(5,5));

//Ex7 Sqrt
console.log("Prueba del ejercicio 7 de la categoría Números");
console.log(Sqrt(9));
console.log(Sqrt(16));
console.log(Sqrt(2));

//Ex8 Abs
console.log("Prueba del ejercicio 8 de la categoría Números");
console.log(Abs(10));
console.log(Abs(-20));
console.log(Abs(0));

//Ex9 Redom
console.log("Prueba del ejercicio 9 de la categoría Números");
console.log(Redom(4.2));
console.log(Redom(4.7));
console.log(Redom(-3.6));

//Ex10 Random
console.log("Prueba del ejercicio 10 de la categoría Números");
console.log(Random());
console.log(Random());
console.log(Random());


//------------------------------------
// LETTERS
//------------------------------------

//Ex1 Concat
console.log("Prueba del ejercicio 1 de la categoría Letras");
console.log(Concat("Hola","Mundo"));
console.log(Concat("Gilberto","Camero"));
console.log(Concat("JS","Vanilla"));

//Ex2 Long
console.log("Prueba del ejercicio 2 de la categoría Letras");
console.log(Long("Hola"));
console.log(Long("Factoria F5"));
console.log(Long(""));

//Ex3 Upper
console.log("Prueba del ejercicio 3 de la categoría Letras");
console.log(Upper("hola"));
console.log(Upper("gilberto"));
console.log(Upper("js vanilla"));

//Ex4 Lower
console.log("Prueba del ejercicio 4 de la categoría Letras");
console.log(Lower("HOLA"));
console.log(Lower("GILBERTO"));
console.log(Lower("JS VANILLA"));

//Ex5 Index
console.log("Prueba del ejercicio 5 de la categoría Letras");
console.log(Index("Hola",0));
console.log(Index("Gilberto",3));
console.log(Index("JavaScript",5));

//Ex6 Reverse
console.log("Prueba del ejercicio 6 de la categoría Letras");
console.log(Reverse("Hola"));
console.log(Reverse("Gilberto"));
console.log(Reverse("JavaScript"));

//Ex7 Search
console.log("Prueba del ejercicio 7 de la categoría Letras");
console.log(Search("banana","a"));
console.log(Search("javascript","j"));
console.log(Search("mississippi","s"));

//Ex8 withoutBlank
console.log("Prueba del ejercicio 8 de la categoría Letras");
console.log(withoutBlank("Hola Mundo"));
console.log(withoutBlank("Gilberto Camero"));
console.log(withoutBlank("JS Vanilla"));

//Ex9 IsPalimdrome
console.log("Prueba del ejercicio 9 de la categoría Letras");
console.log(IsPalimdrome("oso"));
console.log(IsPalimdrome("ana"));
console.log(IsPalimdrome("javascript"));

//Ex10 UpperPhrase
console.log("Prueba del ejercicio 10 de la categoría Letras");
console.log(UpperPhrase("hola mundo"));
console.log(UpperPhrase("gilberto camero"));
console.log(UpperPhrase("js vanilla es genial"));


//------------------------------------
// ARRAYS
//------------------------------------

//Ex1 sumArray
console.log("Prueba del ejercicio 1 de la categoría Arrays");
console.log(sumArray([1,2,3]));
console.log(sumArray([10,20,30]));
console.log(sumArray([-5,5]));

//Ex2 averageArray
console.log("Prueba del ejercicio 2 de la categoría Arrays");
console.log(averageArray([1,2,3]));
console.log(averageArray([10,20,30]));
console.log(averageArray([5,15]));

//Ex3 mergeSort
console.log("Prueba del ejercicio 3 de la categoría Arrays");
console.log(mergeSort([3,1,2]));
console.log(mergeSort([10,5,20,1]));
console.log(mergeSort([-5,100,0]));

//Ex4 greaterThan
console.log("Prueba del ejercicio 4 de la categoría Arrays");
console.log(greaterThan([1,5,10], 4));
console.log(greaterThan([10,20,30], 15));
console.log(greaterThan([-5,0,5], 0));

//Ex5 combineArrays
console.log("Prueba del ejercicio 5 de la categoría Arrays");
console.log(combineArrays([1,2],[3,4]));
console.log(combineArrays(["a"],["b","c"]));
console.log(combineArrays([], [10]));

//Ex6 maxNumber
console.log("Prueba del ejercicio 6 de la categoría Arrays");
console.log(maxNumber([1,2,3]));
console.log(maxNumber([10,5,20]));
console.log(maxNumber([-5,-10,-1]));

//Ex7 minNumber
console.log("Prueba del ejercicio 7 de la categoría Arrays");
console.log(minNumber([1,2,3]));
console.log(minNumber([10,5,20]));
console.log(minNumber([-5,-10,-1]));

//Ex8 countElement
console.log("Prueba del ejercicio 8 de la categoría Arrays");
console.log(countElement([1,2,1,3],1));
console.log(countElement(["a","b","a"],"a"));
console.log(countElement([true,false,true],true));

//Ex9 removeDuplicates
console.log("Prueba del ejercicio 9 de la categoría Arrays");
console.log(removeDuplicates([1,1,2,3]));
console.log(removeDuplicates(["a","a","b"]));
console.log(removeDuplicates([true,true,false]));

//Ex10 reverseArray
console.log("Prueba del ejercicio 10 de la categoría Arrays");
console.log(reverseArray([1,2,3]));
console.log(reverseArray(["a","b","c"]));
console.log(reverseArray([true,false]));


//------------------------------------
// OBJECTS
//------------------------------------

//Ex1 getName
console.log("Prueba del ejercicio 1 de la categoría Objetos");
console.log(getName({name:"Gilberto"}));
console.log(getName({name:"Camero"}));
console.log(getName({name:"JS"}));

//Ex2 updateAge
console.log("Prueba del ejercicio 2 de la categoría Objetos");
let objA = {age:20};
updateAge(objA,30);
console.log(objA);
let objB = {age:5};
updateAge(objB,10);
console.log(objB);
let objC = {age:100};
updateAge(objC,200);
console.log(objC);

//Ex3 addProperty
console.log("Prueba del ejercicio 3 de la categoría Objetos");
let objD = {};
addProperty(objD,"newProp");
console.log(objD);
let objE = {a:1};
addProperty(objE,"b");
console.log(objE);
let objF = {x:"hola"};
addProperty(objF,"y");
console.log(objF);

//Ex4 deleteProperty
console.log("Prueba del ejercicio 4 de la categoría Objetos");
let objG = {a:1,b:2};
deleteProperty(objG,"a");
console.log(objG);
let objH = {name:"Gilberto",age:30};
deleteProperty(objH,"age");
console.log(objH);
let objI = {x:10,y:20};
deleteProperty(objI,"y");
console.log(objI);

//Ex5 countProperties
console.log("Prueba del ejercicio 5 de la categoría Objetos");
console.log(countProperties({a:1,b:2}));
console.log(countProperties({name:"Gilberto"}));
console.log(countProperties({}));

//Ex6 hasProperty
console.log("Prueba del ejercicio 6 de la categoría Objetos");
console.log(hasProperty({a:1},"a"));
console.log(hasProperty({name:"Gilberto"},"age"));
console.log(hasProperty({x:10},"x"));

//Ex7 getValues
console.log("Prueba del ejercicio 7 de la categoría Objetos");
console.log(getValues({a:1,b:2}));
console.log(getValues({name:"Gilberto",age:30}));
console.log(getValues({x:true,y:false}));

//Ex8 areEqual
console.log("Prueba del ejercicio 8 de la categoría Objetos");
console.log(areEqual({a:1},{a:1}));
console.log(areEqual({a:1,b:2},{a:1,b:3}));
console.log(areEqual({x:10},{x:10,y:20}));

//Ex9 copyObject
console.log("Prueba del ejercicio 9 de la categoría Objetos");
console.log(copyObject({a:1,b:2}));
console.log(copyObject({name:"Gilberto"}));
console.log(copyObject({x:true}));

//Ex10 mergeObjects
console.log("Prueba del ejercicio 10 de la categoría Objetos");
console.log(mergeObjects({a:1},{b:2}));
console.log(mergeObjects({a:1,b:2},{b:3}));
console.log(mergeObjects({x:10},{x:20,y:30}));
