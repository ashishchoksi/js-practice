// -------------------- Async API call --------------------
// this return call back which get value - high order function
const makeAPICallAsync = (uri) => {
    let response = null
    fetch(uri)
        .then(res => res.json())
        .then(data => {
            response = data;
        })
        .catch(err => console.log(err));
    return () => response;    
}

// wait for 100ms
const printData = (cb) => {
    setTimeout( () => console.log(cb()), 100);
}

const responseCallBack = makeAPICallAsync("https://reqres.in/api/users");
printData(responseCallBack);

 
// ------------------- SYNC api call ----------

/** 
 * async/await is just syntactical sugar over chaining of then block
 * You can achieve the same thing with promise.then().then() chaining 
 */ 
const makeAPICallSync = async (uri) => {
    const response = await fetch(uri);
    const jsonData = await response.json();
    return jsonData;
}

// as soon as we get the data then block will be executed
makeAPICallSync("https://reqres.in/api/users")
    .then(res => {
        console.log(res)
    });
