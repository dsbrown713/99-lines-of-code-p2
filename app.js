let friends = ["Ricky", "Zak", "Robert", "Kevin", "Julian"]


let button = document.createElement("button")
button.appendChild(document.createTextNode("Sing!"))
button.addEventListener('click', function() {
    for (let friend of friends) {
        let friendDiv = document.createElement("div")
        friendDiv.className = "friend"
        let friendHeader = document.createElement("h3")
        friendHeader.textContent = friend
        friendDiv.appendChild(friendHeader)
        for (let i = 99; i > 0; i--) {
            let line
            if (i == 1) {
                line = `${i} line of code in the file, ${i} line of code; ${friend} strikes one out, clears it all out, no more lines of code in the file.`
            } else {
                line = `${i} lines of code in the file, ${i} lines of code; ${friend} strikes one out, clears it all out, ${i-1} lines of code in the file.`
            }
            let lineP = document.createElement("p")
            lineP.textContent = line
            friendDiv.appendChild(lineP)
        }
        document.body.appendChild(friendDiv)
    }
});


window.addEventListener('DOMContentLoaded', function() {
    document.body.appendChild(button)
});
