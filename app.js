const input = document.getElementById("input")
const card = document.getElementById("card")
const btn = document.getElementById("btn")
const form = document.getElementById("form")
const wraper = document.getElementById("wraper")


function funcValidet() {
    if (input.value.length <= 3) {
        alert("Iltimos 3 tadan kon harif yozing")
        input.focus()
        input.style.outlineColor = "red"
        return false
    }
    return true
}

function creatCard(user) {
    return `
    <div id="card">
    <h3>${user.input}</h3>
    </div>`
}

btn && btn.addEventListener("click", function (event) {
    event.preventDefault()

    const isValid = funcValidet()

    if (!isValid) {
        return;
    }

    const user = {
        input: input.value,
    }
    const card = creatCard(user)

    wraper.innerHTML += card

    form.reset()


})

clearBtn && clearBtn.addEventListener("click", function(event){
    wraper.innerHTML = "";
})