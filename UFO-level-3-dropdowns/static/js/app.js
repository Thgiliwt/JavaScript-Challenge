let all = data

const tbody = d3.select("tbody")

all.forEach((row)=>{
    let trow = tbody.append("tr")
    Object.entries(row).forEach(([key,value])=>{
        let tcell = trow.append("td")
        tcell.text(value)
    })    
})

////country
d3.selectAll("#countrydp").on("change",getCountry)
function getCountry(){   
    let dpMenu = d3.select("#countrydp")
    let dataTbale = dpMenu.property("value")
    let dataset = all
    console.log(dpMenu)
    console.log(dataTbale) 
    if (dataTbale == "us"){
        dataset = all.filter((row)=>{
            return row.country === "us"
        })
        tbody.html("")

        dataset.forEach((row)=>{
            let trow = tbody.append("tr")
            Object.entries(row).forEach(([key,value])=>{
                let tcell = trow.append("td")
                tcell.text(value)
            })    
        })
    }
    else if (dataTbale == "ca"){
        dataset = all.filter((row)=>{
            return row.country === "ca"
        })
        tbody.html("")

        dataset.forEach((row)=>{
            let trow = tbody.append("tr")
            Object.entries(row).forEach(([key,value])=>{
                let tcell = trow.append("td")
                tcell.text(value)
            })    
        })
    }    
}
////shape
d3.selectAll("#shapedp").on("change",getShape)
function getShape(){   
    let dpMenu = d3.select("#shapedp")
    let dataTbale = dpMenu.property("value")
    let dataset = all
    console.log(dpMenu)
    console.log(dataTbale) 
    if (dataTbale == "circle"){
        dataset = all.filter((row)=>{
            return row.shape === "circle"
        })
        tbody.html("")

        dataset.forEach((row)=>{
            let trow = tbody.append("tr")
            Object.entries(row).forEach(([key,value])=>{
                let tcell = trow.append("td")
                tcell.text(value)
            })    
        })
    }
    else if (dataTbale == "triangle"){
        dataset = all.filter((row)=>{
            return row.shape === "triangle"
        })
        tbody.html("")

        dataset.forEach((row)=>{
            let trow = tbody.append("tr")
            Object.entries(row).forEach(([key,value])=>{
                let tcell = trow.append("td")
                tcell.text(value)
            })    
        })
    }
    else if (dataTbale == "unknown"){
        dataset = all.filter((row)=>{
            return row.shape === "unknown"
        })
        tbody.html("")

        dataset.forEach((row)=>{
            let trow = tbody.append("tr")
            Object.entries(row).forEach(([key,value])=>{
                let tcell = trow.append("td")
                tcell.text(value)
            })    
        })
    }
    else if (dataTbale == "fireball"){
        dataset = all.filter((row)=>{
            return row.shape === "fireball"
        })
        tbody.html("")

        dataset.forEach((row)=>{
            let trow = tbody.append("tr")
            Object.entries(row).forEach(([key,value])=>{
                let tcell = trow.append("td")
                tcell.text(value)
            })    
        })
    } 
    else if (dataTbale == "formation"){
        dataset = all.filter((row)=>{
            return row.shape === "formation"
        })
        tbody.html("")

        dataset.forEach((row)=>{
            let trow = tbody.append("tr")
            Object.entries(row).forEach(([key,value])=>{
                let tcell = trow.append("td")
                tcell.text(value)
            })    
        })
    }    
    else if (dataTbale == "other"){
        dataset = all.filter((row)=>{
            return row.shape === "other"
        })
        tbody.html("")

        dataset.forEach((row)=>{
            let trow = tbody.append("tr")
            Object.entries(row).forEach(([key,value])=>{
                let tcell = trow.append("td")
                tcell.text(value)
            })    
        })
    }    
    else if (dataTbale == "sphere"){
        dataset = all.filter((row)=>{
            return row.shape === "sphere"
        })
        tbody.html("")

        dataset.forEach((row)=>{
            let trow = tbody.append("tr")
            Object.entries(row).forEach(([key,value])=>{
                let tcell = trow.append("td")
                tcell.text(value)
            })    
        })
    }    
    else if (dataTbale == "disk"){
        dataset = all.filter((row)=>{
            return row.shape=== "disk"
        })
        tbody.html("")

        dataset.forEach((row)=>{
            let trow = tbody.append("tr")
            Object.entries(row).forEach(([key,value])=>{
                let tcell = trow.append("td")
                tcell.text(value)
            })    
        })
    }
    else if (dataTbale == "chevron"){
        dataset = all.filter((row)=>{
            return row.shape === "chevron"
        })
        tbody.html("")

        dataset.forEach((row)=>{
            let trow = tbody.append("tr")
            Object.entries(row).forEach(([key,value])=>{
                let tcell = trow.append("td")
                tcell.text(value)
            })    
        })
    }    
    else if (dataTbale == "rectangle"){
        dataset = all.filter((row)=>{
            return row.shape === "rectangle"
        })
        tbody.html("")

        dataset.forEach((row)=>{
            let trow = tbody.append("tr")
            Object.entries(row).forEach(([key,value])=>{
                let tcell = trow.append("td")
                tcell.text(value)
            })    
        })
    }    
    else if (dataTbale == "cross"){
        dataset = all.filter((row)=>{
            return row.shape === "cross"
        })
        tbody.html("")

        dataset.forEach((row)=>{
            let trow = tbody.append("tr")
            Object.entries(row).forEach(([key,value])=>{
                let tcell = trow.append("td")
                tcell.text(value)
            })    
        })
    }    
    else if (dataTbale == "flash"){
        dataset = all.filter((row)=>{
            return row.shape === "flash"
        })
        tbody.html("")

        dataset.forEach((row)=>{
            let trow = tbody.append("tr")
            Object.entries(row).forEach(([key,value])=>{
                let tcell = trow.append("td")
                tcell.text(value)
            })    
        })
    }    
    else if (dataTbale == "changing"){
        dataset = all.filter((row)=>{
            return row.shape === "changing"
        })
        tbody.html("")

        dataset.forEach((row)=>{
            let trow = tbody.append("tr")
            Object.entries(row).forEach(([key,value])=>{
                let tcell = trow.append("td")
                tcell.text(value)
            })    
        })
    }    
    else if (dataTbale == "oval"){
        dataset = all.filter((row)=>{
            return row.shape === "oval"
        })
        tbody.html("")

        dataset.forEach((row)=>{
            let trow = tbody.append("tr")
            Object.entries(row).forEach(([key,value])=>{
                let tcell = trow.append("td")
                tcell.text(value)
            })    
        })
    }
    else if (dataTbale == "cigar"){
        dataset = all.filter((row)=>{
            return row.shape === "cigar"
        })
        tbody.html("")

        dataset.forEach((row)=>{
            let trow = tbody.append("tr")
            Object.entries(row).forEach(([key,value])=>{
                let tcell = trow.append("td")
                tcell.text(value)
            })    
        })
    }
    else if (dataTbale == "teardrop"){
        dataset = all.filter((row)=>{
            return row.shape === "teardrop"
        })
        tbody.html("")

        dataset.forEach((row)=>{
            let trow = tbody.append("tr")
            Object.entries(row).forEach(([key,value])=>{
                let tcell = trow.append("td")
                tcell.text(value)
            })    
        })
    }
    else if (dataTbale == "cylinder"){
        dataset = all.filter((row)=>{
            return row.shape === "cylinder"
        })
        tbody.html("")

        dataset.forEach((row)=>{
            let trow = tbody.append("tr")
            Object.entries(row).forEach(([key,value])=>{
                let tcell = trow.append("td")
                tcell.text(value)
            })    
        })
    }
    else if (dataTbale == "light"){
        dataset = all.filter((row)=>{
            return row.shape === "light"
        })
        tbody.html("")

        dataset.forEach((row)=>{
            let trow = tbody.append("tr")
            Object.entries(row).forEach(([key,value])=>{
                let tcell = trow.append("td")
                tcell.text(value)
            })    
        })
    }                   
}