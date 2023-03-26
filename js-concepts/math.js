console.log("--------------------- basic math -------------------");

function add(a, b) {
    return a+b;
}

function addNos(...a) {
    let sum = 0;
    a.forEach(no => {
        sum += parseInt(no);
    })
    return sum;
}

console.log(add(10, 2));
console.log(addNos(10, 15, '5', "25"));
