document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-sorteador').addEventListener('submit', () => {
        let numeroMaximo = document.getElementById('numero-maximo');
        numeroMaximo = parseInt(numeroMaximo)

        const resultado = Math.random() * numeroMaximo;
        alert(resultado)
    })
})