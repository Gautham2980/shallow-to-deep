const obj={
    name:"John",
    age:20,
    fav:{
        color:"red",
        color1:"blue"
    }
}

let obj2=JSON.parse(JSON.stringify(obj));
// console.log(obj,obj2);
obj2.name="james";
obj2.fav.color1="green";
console.log(obj,obj2);


