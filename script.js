const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  //alert("Hello world!")
  // prompt("Informe a data para inclusão (DD/MM):")
  const today = new Date().toLocaleDateString("pt-br").slice(0, 5)

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("❗ A data já está inclusa no APP.")
    return
  }

  nlwSetup.addDay(today)
  alert("✔ Dia adicionado com sucesso.")
}

function save() {
  // window.localStorage
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

/*
const data = {
  run: ["01-01", "01-04", "01-05", "01-06", "01-07"],
  water: ["01-01", "01-02", "01-05", "01-06", "01-07"],
  food: ["01-06", "01-07"],
}
*/

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
