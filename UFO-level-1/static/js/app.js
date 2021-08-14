// from data.js
const tableData = data;

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
//filtering the data by datetime using event handler
const button = d3.select("#filter-btn")
const form = d3.select("form")

function filterdate(){
    d3.event.preventDefault()
    const inputElement = d3.select("#datetime")
    const inputValue = inputElement.property("value")
    const filtered = tableData.filter((row)=>{
        return row.datetime === inputValue
    })
    tbody.html("")

    filtered.forEach((row)=>{
        let trow = tbody.append("tr")
        Object.entries(row).forEach(([key,value])=>{
            let tcell = trow.append("td")
            tcell.text(value)
        })    
    })
}

button.on("click",filterdate)
form.on("submit",filterdate)

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