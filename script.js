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
