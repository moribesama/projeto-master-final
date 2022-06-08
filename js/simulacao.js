
document.getElementById("btnCalc").addEventListener("click", function (event) {
    event.preventDefault()
});
// document.getElementById("horas").addEventListener("change", calcular);


function calcular() {
    let horasInput = document.getElementById("horas").value;
    let minutos = (Number(horasInput) * 60);
    let valoPorMinuto = parseInt(minutos * 1.66666666667);
    console.log(valoPorMinuto);
    document.getElementById("preco").innerHTML = `R$${valoPorMinuto},00`;
}