const listaDellaSpesa = ["latte", "pane", "pasta", "pesce", "biscotti", "frutta", "yogurt", "carne", "cioccolata"]

const lista = document.getElementById("lista")

let i = 1

while (i < listaDellaSpesa.length) {

    lista.innerHTML += `<li>${listaDellaSpesa[i]}</li>`

    i++
}