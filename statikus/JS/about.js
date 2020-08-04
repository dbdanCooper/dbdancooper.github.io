let users = [
    {surname: "Kovács", firstname: "Béla", age: 41},
    {surname: "Kopasz", firstname: "Lajos", age: 21},
    {surname: "Váci", firstname: "Emil", age: 67},
    {surname: "Csécsi", firstname: "Virág", age: 16},
    {surname: "Lakatos", firstname: "Rózsa", age: 22},
    {surname: "Száguldó", firstname: "Mercédesz", age: 33},
    {surname: "Ésik", firstname: "István", age: 52},
    {surname: "Fodor", firstname: "Izolda", age: 40},
  ];

let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};

let createButtonGroup = parent => {
    let group = document.createElement("div");
    group.className = "btn-group";
    
    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML = '<i class="fas fa-american-sign-language-interpreting"></i>';

    let btnDanger = document.createElement("button");
    btnDanger.className = "btn btn-danger";
    btnDanger.innerHTML = '<i class="fas fa-archway"></i>';

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
}

for (let k in users) {
        let tr = document.createElement("tr");
        createTD(parseInt(k)+1, tr);
        for(let value of Object.values(users[k])) {
            createTD(value, tr);
        }
        createButtonGroup(tr);
        tableBody.appendChild(tr);
}