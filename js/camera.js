const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
let imagemURL = "";
const botaoEnviarFoto = document.querySelector("[data-enviar]")

botaoIniciarCamera.addEventListener('click', async function () {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });

    botaoIniciarCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo;
});

botaoTirarFoto.addEventListener('click', function () {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imagemURL = canvas.toDataURL('image/jpeg');

    campoCamera.style.display = "none";
    mensagem.style.display = "block";
});

botaoEnviarFoto.addEventListener("click", () => {
    const receberDadosExistentes = localStorage.getItem("cadastro");
    const converteRetorno = JSON.parse(receberDadosExistentes);

    converteRetorno.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno));

    window.location.href= "./abrir-conta-form-3.html";
})


// MAIS SOBRE O CODIGO

// O código começa declarando algumas variáveis:
// botaoIniciarCamera: referência ao botão que inicia a câmera.
// campoCamera: referência ao elemento HTML que exibe a câmera.
// video: referência ao elemento de vídeo.
// botaoTirarFoto: referência ao botão que tira a foto.
// canvas: referência ao elemento canvas onde a foto será exibida.
// mensagem: referência a um elemento HTML que exibe uma mensagem.
// imagemURL: variável que armazena a URL da foto tirada.
// botaoEnviarFoto: referência ao botão que envia a foto.

// O código adiciona um evento de clique ao "botaoIniciarCamera":
// Ao clicar nesse botão, o código usa "navigator.mediaDevices.getUserMedia()" para acessar a câmera do dispositivo.
// Após obter acesso à câmera, o código oculta o "botaoIniciarCamera" e exibe o "campoCamera".
// O vídeo da câmera é então exibido no elemento "video".

// O código adiciona um evento de clique ao "botaoTirarFoto":
// Ao clicar nesse botão, o código usa o método "drawImage()" do contexto 2D do "canvas" para capturar a imagem do vídeo.
// A URL da imagem capturada é então armazenada na variável "imagemURL".
// O campoCamera é ocultado e a mensagem é exibida.

// O código adiciona um evento de clique ao "botaoEnviarFoto":
// Ao clicar nesse botão, o código obtém os dados existentes no localStorage, usando "localStorage.getItem("cadastro")", e os converte de volta para um objeto usando "JSON.parse()".
// O código então adiciona a propriedade "imagem" ao objeto "converteRetorno", atribuindo a ela a "imagemURL".
// Os dados atualizados são então salvos no localStorage, usando "localStorage.setItem('cadastro', JSON.stringify(converteRetorno))".
// Por fim, o usuário é redirecionado para a página "abrir-conta-form-3.html" usando "window.location.href".

// Essa sequência de ações permite que o usuário tire uma foto usando a câmera do dispositivo e, em seguida, envie essa foto junto com os dados do formulário já salvos no localStorage.