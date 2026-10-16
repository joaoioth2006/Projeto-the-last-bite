const botao = document.getElementById("menubtn");
const menu = document.getElementById("menu");

botao.addEventListener("click", ()=>{

    console.log("cliquei")
    menu.classList.toggle("menu-aberto");
});