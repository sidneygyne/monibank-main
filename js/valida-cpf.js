export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        // console. log("Esse CPF não exixte!")
        campo.setCustomValidity('Esse CPF não é válido!');
    }   //else {
        // console.log("Existe!");
    // }

    // console.log(validaNumerosRepetidos(cpf));
}

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return numerosRepetidos.includes(cpf)
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for(let tamanho = 0; tamanho < 9 ; tamanho++) {
        soma += cpf[tamanho] * multiplicador;;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;

        return soma  != cpf[9]
    }
}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for(let tamanho = 0; tamanho < 10 ; tamanho++) {
        soma += cpf[tamanho] * multiplicador;;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;

        return soma  != cpf[10]
    }
}



// MAIS SOBRE O CODIGO

// A função "ehUmCPF(campo)" é a função principal que é chamada quando o usuário preenche o campo de CPF.
// Ela primeiro remove os pontos e traços do CPF digitado, deixando apenas os números.
// Em seguida, ela chama três funções auxiliares para validar o CPF:
// "validaNumerosRepetidos(cpf)": verifica se o CPF digitado é uma sequência de números repetidos (como 111.111.111-11).
// "validaPrimeiroDigito(cpf)": verifica se o primeiro dígito verificador do CPF é válido.
// "validaSegundoDigito(cpf)": verifica se o segundo dígito verificador do CPF é válido.
// Se alguma dessas validações falhar, a função "ehUmCPF()" define uma mensagem de erro personalizada no campo de CPF usando "campo.setCustomValidity()".

// A função "validaNumerosRepetidos(cpf)" verifica se o CPF digitado é uma sequência de números repetidos, comparando-o com uma lista de CPFs conhecidos como inválidos.

// A função "validaPrimeiroDigito(cpf)" calcula o primeiro dígito verificador do CPF e verifica se ele é igual ao dígito presente no CPF digitado.
// Ela faz isso multiplicando cada dígito do CPF por um número decrescente (10 a 2), somando os resultados e aplicando uma fórmula para obter o primeiro dígito verificador.

// A função "validaSegundoDigito(cpf)" calcula o segundo dígito verificador do CPF e verifica se ele é igual ao dígito presente no CPF digitado.
// Ela faz isso de forma semelhante à função "validaPrimeiroDigito()", mas usando uma multiplicação decrescente de 11 a 2.

// Esse código é usado para garantir que o CPF digitado pelo usuário seja válido, evitando que sejam aceitos CPFs inválidos ou sequências de números repetidos.