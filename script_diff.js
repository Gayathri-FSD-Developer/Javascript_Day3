// Quest:1 How to compare the two json have the same properties without order

let obj1={name:"Person 1", age:5};
let obj2={age:5, name:"Person 1"};

if(obj1["name"]===obj2["name"] && obj1["age"]===obj2["age"])
{
   console.log("same");
}
else{
    console.log("not same");
}

// Instead can use this 

// let obj1={name:"Person 1", age:5};
// let obj2={age:5, name:"Person 1"};

// console.log(_.isEqual(obj1, obj2));
	
