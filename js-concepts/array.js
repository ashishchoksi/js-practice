console.log("------------------------ [Array] ---------------------------")
function printDirect(nos) {
    console.log("---------- print directly --------")
    for (let no of nos) {
        console.log(no)
    }
    console.log("---------- print directly --------")
}

function printWithIndex(nos) {
    console.log("---------- print with index --------")
    for (let index in nos) {
        console.log(index + ": " + nos[index]);
    }
    console.log("---------- print with index --------")
}

let no = [10, 20, 30, 40];
printDirect(no);
printWithIndex(no);

// --------------Array operation------------------

function addToLast(arr, no) {
    arr.push(no);
}

function addToFirst(arr, no) {
    arr.unshift(no);
}

function removeFirst(arr) {
    arr.shift();
}

function removeLast(arr) {
    arr.pop();
}

let testArr = [1,2,3,4,5]
console.log("Before : " + JSON.stringify(testArr));
addToLast(testArr, 6);
console.log("After adding 6 to last : " + JSON.stringify(testArr));
addToFirst(testArr, 0);
console.log("After adding 0 to first : " + JSON.stringify(testArr));
removeFirst(testArr);
console.log("After removing first element : " + JSON.stringify(testArr));
removeLast(testArr);
console.log("After removing last element : " + JSON.stringify(testArr));

// -------------- array rest / spread operator --------------------

let a = [1,2,3,4,5,6]

function softCopy(a) {
    let b = a;
    console.log(a===b);
}

function deepCopy() {
    let b = [...a];
    console.log("new arr : " + b);
    console.log("same reference ? " + (a===b));
}

softCopy(a);
deepCopy(a);

function removeFirstTwoElement(arr) {
    let [ , , ...newArr] = arr;
    return newArr;
}

console.log(removeFirstTwoElement(a));