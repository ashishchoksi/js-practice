console.log("------------ Functions -----------");

let magic = () => {
    return new Date();
}
console.log(magic())

// -----

const concatArray = (x, y) => {
    return x.concat(y);
}
console.log(concatArray([1,2], [3, 4]));

// ------

const arr = [1,5,3,-7,-8,4,-5,11,6,-9,'6', 'hola']
console.log("write code to print square of int numbers");

const result = arr.filter(x => Number.isInteger(x) && x > 0)
                  .map(x => x * x);

console.log(result);
console.log(result.sort()); // lexical sort
console.log(result.sort( (x,y) => x-y )); // numeric sort

// ------

const sum = (...args) => {
    return args.reduce( (x, y) => x+y , 0);
}

console.log(sum(1,2,3,4,5, 6));
