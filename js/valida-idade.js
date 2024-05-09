export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    // validaIdade(dataNascimento);
    // console.log(dataNascimento);
    // console.log(validaIdade(dataNascimento));
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity('O usuario não é maior de idade');
    }

}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}


// sSOBRE O CODIGO

// "ehMaiorDeIdade()" function:
// Agora, além de chamar a função "validaIdade()", ela verifica o resultado dessa função.
// Caso o resultado seja "false", significa que o usuário não é maior de idade, então a função "setCustomValidity()" é chamada no campo, definindo uma mensagem de erro personalizada.

// "validaIdade()" function:
// Essa função permaneceu a mesma, calculando a data 18 anos após a data de nascimento e comparando com a data atual.
// Ela retorna "true" se a data atual for maior ou igual à data 18 anos após a data de nascimento, indicando que a pessoa é maior de idade.
// E
// ssas alterações são muito importantes, pois agora, além de validar a idade, o código também exibe uma mensagem de erro personalizada caso o usuário não seja maior de 18 anos. Isso ajuda a fornecer um feedback claro para o usuário sobre o que está errado no seu cadastro.