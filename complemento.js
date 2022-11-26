let numero;
let digitos;
let complemento;

function calcularComp9() {
    numero = document.getElementById("inDecimal").value;
    digitos = numero.length;
    complemento = (Math.pow(10, digitos) - 1) - Number(numero);
    document.getElementById("outDecimal").textContent = `O complemento de 9 de ${numero} é ${complemento}` 
}
btn9.addEventListener('click', calcularComp9)

function calcularComp10() {
    numero = document.getElementById("inDecimal").value;
    digitos = numero.length;
    complemento = Math.pow(10, digitos) - Number(numero);
    document.getElementById("outDecimal").textContent = `O complemento de 10 de ${numero} é ${complemento}` 
}
btn10.addEventListener('click', calcularComp10)

function calcularComp1() {
    numero = document.getElementById("inBinario").value;
    digitos = numero.length;
    complemento = (Math.pow(2, digitos) - 1).toString(2) - Number(numero)
    document.getElementById("outBinario").textContent = `O complemento de 1 de ${numero} é ${complemento}`
}
btn1.addEventListener('click', calcularComp1)

function calcularComp2() {
    function binaryToDecimal(n)
    {
        let num = n;
        let dec_value = 0;
     
        // Initializing base value to 1, i.e 2^0
        let base = 1;
     
        let temp = num;
        while (temp) {
            let last_digit = temp % 10;
            temp = Math.floor(temp / 10);
     
            dec_value += last_digit * base;
     
            base = base * 2;
        }
     
        return dec_value;
    }

    numero = document.getElementById("inBinario").value;
    digitos = numero.length;
    complemento = (Math.pow(2, digitos) - binaryToDecimal(Number(numero))).toString(2)
    document.getElementById("outBinario").textContent = `O complemento de 2 de ${numero} é ${complemento}`
}   
btn2.addEventListener('click', calcularComp2)