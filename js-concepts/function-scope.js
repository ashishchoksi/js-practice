console.log("------------ Function scope -----------");
var globalVar = "hello from global var";

function f2() {
    secrateVar = "secrate var assigned without var";
}

function f1 () {
    if(typeof globalVar != undefined) {
        console.log(globalVar);
    }

    if(typeof secrateVar != undefined) {
        console.log(secrateVar);
    }
}

f2();
f1();
secrateVar = "fff";
f1();
