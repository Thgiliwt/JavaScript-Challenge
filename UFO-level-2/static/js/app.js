// from data.js
let tableData = data;

// YOUR CODE HERE!
//use d3 to find tbody can set the var for it
const tbody = d3.select("tbody")
//add the value within each object from the data array into a 'td' section on the html page
tableData.forEach((row)=>{
    let trow = tbody.append("tr")
    Object.entries(row).forEach(([key,value])=>{
        let tcell = trow.append("td")
        tcell.text(value)
    })    
})

//adding a 'restore' button to refresh the data after filtered
const buttonRestore = d3.select("#restore")

buttonRestore.on("click",function(){
    tbody.html("")
    tableData.forEach((row)=>{
        let trow = tbody.append("tr")
        Object.entries(row).forEach(([key,value])=>{
            let tcell = trow.append("td")
            tcell.text(value)
        })    
    })
})

//filtering inputfields
const button = d3.select("#filter-btn")
const form = d3.selectAll("input") //selet all "input" fields

button.on("click",filterall)
form.on("change",filterall)

let filterPair = {}

function filterall() {
    d3.event.preventDefault()
    
    let inputElement = d3.select(this)
    let inputValue = inputElement.property("value")
    
    let inputID = inputElement.attr("id")
    if (inputValue) {
        filterPair[inputID] = inputValue;
    }
    else {
        delete filterPair[inputID]
    }
    tbody.html("")
    let filterData = tableData
    Object.entries(filterPair).forEach(([key, value]) => {
        filterData = filterData.filter(row => row[key] === value)
    })

    filterData.forEach((row) => {
        let trow = tbody.append("tr")
        Object.entries(row).forEach(([key, value]) => {
            let tcell = trow.append("td")
            tcell.text(value)
        })
    })
}
