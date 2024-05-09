import ehUmCPF from "./valida-cpf.js"
import ehMaiorDeIdade from "./valida-idade.js"

const camposDoFormulario = document.querySelectorAll('[required]');
const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
        "aniversario": e.target.elements["aniversario"].value,
    }

    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

    window.location.href = './abrir-conta-form-2.html';
})

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo)); // blur ("desfoque", em português) se caracteriza por um clique fora do input, ou seja, assim que o campo que estava sendo preenchido estiver fora de foco, o event listener disparará a função verificaCampo.
    campo.addEventListener("invalid", evento => evento.preventDefault())
} )

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismstch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');

    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo);
    }
    if (campo.name == "aniversario" && campo.value!= "") {
        ehMaiorDeIdade(campo);
    }
    console.log(campo.validity);
    
    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem);
        }
    })

    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeImput = campo.checkValidity();

    if(!validadorDeImput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
}

// console.log(camposDoFormulario);

// SOBRE O CODIGO

// Importação de funções:
// O código importa as funções "ehUmCPF() e ehMaiorDeIdade()" de seus respectivos arquivos.

// Seleção de elementos do DOM:
// O código seleciona todos os campos do formulário que possuem o atributo "required".
// Também seleciona o próprio formulário.

// Evento de envio do formulário:
// Quando o formulário é enviado, o evento "submit" é disparado.
// O código previne o comportamento padrão do formulário (recarregar a página) usando "e.preventDefault()".
// Em seguida, ele cria um objeto "listaRespostas" com os valores dos campos do formulário.
// Esse objeto é armazenado no "localStorage" e, em seguida, o usuário é redirecionado para a página "abrir-conta-form-2.html".

// Adição de "event" listeners nos campos:
// Para cada campo do formulário, o código adiciona dois event listeners:
// "blur": dispara a função "verificaCampo()" quando o campo perde o foco.
// "invalid": previne o comportamento padrão do campo inválido.

// Definição de tipos de erro e mensagens:
// O código define um array "tiposDeErro" com os possíveis tipos de erro que podem ocorrer nos campos.
// Também define um objeto "mensagens" com as mensagens de erro personalizadas para cada campo e tipo de erro.

// Função "verificaCampo():
// Essa função é responsável por validar os campos do formulário.
// Ela primeiro limpa a mensagem de erro personalizada do campo.
// Em seguida, verifica se o campo é um CPF ou uma data de nascimento, chamando as funções "ehUmCPF() e ehMaiorDeIdade()" respectivamente.
// Depois, ela percorre o array "tiposDeErro" e verifica se algum deles é válido para o campo atual. Caso seja, ela define a mensagem de erro correspondente.
// Por fim, ela seleciona o elemento ".mensagem-erro" dentro do campo e atualiza seu conteúdo com a mensagem de erro, caso o campo seja inválido.

// O código parece estar bem estruturado e implementando as validações de forma correta. Ele utiliza as funções "ehUmCPF() e ehMaiorDeIdade()" para validar o CPF e a idade do usuário, respectivamente. Além disso, ele exibe mensagens de erro personalizadas para cada campo, o que melhora a experiência do usuário.