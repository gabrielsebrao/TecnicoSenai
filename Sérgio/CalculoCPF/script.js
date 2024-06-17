let result1, dv1, result2, dv2;

function validarCPF() {
    let CPF = document.getElementById('cpf').value;
    let acumulo1 = 0, acumulo2 = 0;
    let cont = 2;
    if (CPF.length != 11) {
        alert("CPF inválido")
        return 0;
    }
    let CPF9 = CPF.substring(0, 9)
    for (let i = 8; i >= 0; i--) {
        let dig = CPF9.charAt(i)
        dig = parseInt(dig)
        dig *= cont
        acumulo1 += dig
        cont++;
    }
    result1 = acumulo1 % 11
    if (result1 == 0 || result1 == 1) {
        dv1 = 0
    } else {
        dv1 = 11 - result1
    }

    cont = 11;
    let CPF10 = CPF.substring(0,10)
    for(let i = 0; i <= 9; i++){
        let digito2 = CPF10.charAt(i)
        digito2 = parseInt(digito2)
        digito2 *= cont
        acumulo2 += digito2
        cont--
    }
    result2 = acumulo2 % 11
    if (result2 == 0 || result2 == 1) {
        dv2 = 0
    } else {
        dv2 = 11 - result2
    }

    if(CPF[9] != dv1.toString() || CPF[10] != dv2.toString()){
        alert("CPF inválido")
        return 0;
    }

    alert("Ok")

}