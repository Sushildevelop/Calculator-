let var1 = document.createElement("h1")
var1.innerText = "Calculator"
    // document.body.appendChild(var1)

let string = "";
let buttons = document.querySelectorAll(".button")
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string)
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'C') {
            string = ""
            document.querySelector('input').value = string;
        } else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

    })

})