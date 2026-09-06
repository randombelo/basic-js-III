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

