console.log("------------------------ {Objects} ---------------------------")

const obj = {
    name: "ashish",
    age: 25,
    "address": "surat",
    "str": function fun() {
        return this.name + " " + this.age + " " + this.address; 
    },
    printName() { // you can't use arrow function with 'this' keyword
        console.log(this.name);
    }
};

function get(obj, property) {
    return obj[property];
}

// below will freeze obj then you cannot update the value
// Object.freeze(obj);

console.log(obj);
console.log(obj.str());
console.log(obj.name);
console.log(obj["name"]);
console.log(get(obj, "age"));

console.log("Trying to access property 'emp_id' " + obj.emp_id);
console.log("add emp_id property");
obj.emp_id = "123";
console.log("Trying to access property 'emp_id' " + obj.emp_id);
console.log("remove property 'age'");
delete obj.age;
console.log("Tryting to access property 'age' " + obj.age);
obj.name = "ashish choksi";
console.log("Updated name value : " + obj["name"]);
obj.printName();