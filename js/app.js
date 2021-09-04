class Client{
    constructor(name, lastName,email,weeks){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.weeks = weeks;
    }
}
let clients = []

let btnAccept = document.getElementById("accept")
let btnCancel = document.getElementById("cancel")
let table = document.getElementById("table")
let reservas = document.getElementById("reservas")


const saveAll = () => {
   
    let name = document.getElementById("name").value
    let lastName = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let weeks = document.getElementById("weeks").value


    if( JSON.parse(localStorage.getItem("clients"))  != null) {
        clients = JSON.parse(localStorage.getItem("clients"))
        let client = new Client(name, lastName,email,weeks)
        clients.push(client)
        localStorage.setItem("clients", JSON.stringify(clients))

    }else {
        let client = new Client(name, lastName,email,weeks)
        clients.push(client)
        localStorage.setItem("clients", JSON.stringify(clients))

    }
}

// imprimir las reservas
const printAllData = () => {
    let savedData = JSON.parse(localStorage.getItem("clients"))
    if(savedData != null) {
        savedData.forEach(e => {
            let tableOfData = document.createElement("tr")
    
            let td1 = document.createElement("td")
            td1.setAttribute("class","col-1")
            td1.textContent = `${savedData.indexOf(e)}`
            tableOfData.appendChild(td1)
    
            let th1 = document.createElement("th")
            th1.setAttribute("class","col-2")
            th1.textContent = `${e.name}`
            tableOfData.appendChild(th1)
    
            let th2 = document.createElement("th")
            th2.setAttribute("class","col-3")
            th2.textContent = `${e.lastName}`
            tableOfData.appendChild(th2)
    
            let th3 = document.createElement("th")
            th3.setAttribute("class","col-4")
            th3.textContent = `${e.email}`
            tableOfData.appendChild(th3)
    
            let th4 = document.createElement("th")
            th4.setAttribute("class","col-5")
            th4.textContent = `${e.weeks}`
            tableOfData.appendChild(th4)
            
            let td2 = document.createElement("td")
            td2.setAttribute("class","col-6")
            td2.textContent = `x`
            tableOfData.appendChild(td2)
    
    
            table.appendChild(tableOfData)
            
        });

    }else {
        alert("haga su reserva")
    }

}




reservas.addEventListener("submit", saveAll)
btnCancel.addEventListener("click", () => {
    localStorage.clear()
    location.reload()
})


printAllData()