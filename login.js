const email = document.getElementById("email");
const confirmemail = document.getElementById("confirm_email");
const senha = document.getElementById("senha");
const confirmsenha = document.getElementById("confirm_senha");

const mensagem = document.createElement("p");
mensagem.textContent = "Preencha todos os campos!";

const inputs = document.querySelectorAll("input");

const entrar = document.getElementById("entrar");




entrar.addEventListener("click", function(){
    let campovazio = false;
    const valorsenha = senha.value;
    const confirmvalue = confirmsenha.value;
    const confemail = confirmemail.value;
    const valoremail = email.value;

    inputs.forEach(function(input){
        if(input.value ===""){
            campovazio = true;
            console.log("Campo vazio!")
        }
    })  
        if(campovazio === true){
            mensagem.textContent = "preencha todos os campos!";
            entrar.parentElement.appendChild(mensagem);
        }
        else{
            if (valorsenha !== confirmvalue || confemail !== valoremail)
            {
                mensagem.textContent = "Verifique os campos !"
                entrar.parentElement.appendChild(mensagem);
            }else {
                mensagem.textContent = "Cadastro realizado!"
                mensagem.style.color = "white";
                entrar.parentElement.appendChild(mensagem);

                setTimeout(function(){
                    window.location.href = "home.html";
                }, 2000);
            }
        }
    })



