// make an api call 
const makeAPICall = async (uri) => {
    const response = await fetch(uri);
    const jsonData = await response.json();    
    return jsonData;
}

const generateTags = (json) => {
    const data = json.data;
    console.log(data);
    const tbody = document.querySelector("#table-data tbody");    
    tbody.innerHTML = "";

    for (let row of data) {
        const idCell = document.createElement('td');
        const firstCell = document.createElement('td');
        const lastCell = document.createElement('td');
        const emailCell = document.createElement('td');
        const imageCell = document.createElement('img');

        idCell.textContent = row.id;
        firstCell.textContent = row.first_name;
        lastCell.textContent = row.last_name;
        emailCell.textContent = row.email;
        imageCell.src = row.avatar;

        const rowCell = document.createElement('tr');
        rowCell.appendChild(idCell);
        rowCell.appendChild(firstCell);
        rowCell.appendChild(lastCell);
        rowCell.appendChild(emailCell);
        rowCell.appendChild(imageCell);

        tbody.appendChild(rowCell);
    }
}

const btn = document.getElementById("myButton");
btn.addEventListener('click', () => {
    const count = document.getElementById("per-page").value || 5;
    console.log("count: " + count)
    // `https://reqres.in/api/users?per_page=${count}` <- we can use this also
    makeAPICall("https://reqres.in/api/users?per_page="+count)
        .then(data => {
            generateTags(data);
        })
        .catch(ex => {
            console.error(ex);
        })
});


// we can generate click event also
setTimeout(() => {
    btn.dispatchEvent(new Event('click'));
}, 1000);
