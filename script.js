//Esto agrega a la pantalla el valor del bóton de la calculadora que toquemos
function Agregar(valor) {
    document.getElementById('pantalla').value += valor
}

// Este parte del codigo lo que hago es Borrar el input que almacena los datos ingresados por el usuario
function Borrar() {
    document.getElementById('pantalla').value = ''
}
// En esta parte de ka funcion lo que hago es crear el calculo matematico
function Calcular() {
    const valorPantalla = document.getElementById('pantalla').value
    if (valorPantalla == '') {
        document.getElementById('pantalla').value = ''
    } else {
        //Esto lo que hace es sacar los valores por ejemplo
        //'7+7' acuerdate de que siempre biene de forma texto entoneces eval lo que hace es sacar ese texto y calcular esa operacion facilmente ya que eval lo hace es realizar un proceso de operaciones
        const resultado = eval(valorPantalla)
        document.getElementById('pantalla').value = resultado
    }

}