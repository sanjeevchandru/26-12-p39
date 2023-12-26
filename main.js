document.write("That takes an array with mixed datatype and calculates the sum of all number"+"<br>");

let a=[1,2,3,"3",5,"a3",true];
document.write("The array : "+a+"<br>")
let x=0;
for(let i=0;i<a.length;i++){
    if(typeof a[i]=="number"){
        x=x+a[i];
    }
}
document.write("sum : "+x);