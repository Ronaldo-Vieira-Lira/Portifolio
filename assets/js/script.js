// Function Menu
function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault();
    let troca = document.getElementById("trocaIcon")
    let nave = document.getElementById("navegacao")
    nave.classList.toggle("ativo") ? troca.src = "./assets/image/icons/close.svg" : troca.src = "./assets/image/icons/menu.svg" 
}
let butonMobile = document.getElementById("menu") 
butonMobile.addEventListener("click", toggleMenu)
butonMobile.addEventListener("touchstart", toggleMenu)


// Functions para aparecer name
var primeiraAreaTexto = document.getElementById("texto1")

function displayOn(area) {
    switch(area) {
        case "html":
            document.getElementById("html").style.display = "block"
            primeiraAreaTexto.innerHTML = "HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
            break

        case "css":
            document.getElementById("css").style.display = "block"
            primeiraAreaTexto.innerHTML = "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML."
            break

        case "bootS":
            document.getElementById("bootS").style.display = "block"
            primeiraAreaTexto.innerHTML = "Bootstrap é um framework web para desenvolvimento de interface de sites e aplicações web usando HTML, CSS e JavaScript. Com a função de melhorar a experiência do usuário em um site amigável e responsivo."
            break

        case "javaS":
            document.getElementById("javaS").style.display = "block"
            primeiraAreaTexto.innerHTML = "JavaScript é uma linguagem de programação interpretada estruturada de script, em alto nível com tipagem dinâmica fraca e multiparadigma."
            break

        case "python":
            document.getElementById("python").style.display = "block"
            primeiraAreaTexto.innerHTML = "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte"
            break
    }
}

// Functions para desaparecer name

function displayOf() {
    document.getElementById("html").style.display = "none"
    document.getElementById("css").style.display = "none"
    document.getElementById("bootS").style.display = "none"
    document.getElementById("javaS").style.display = "none"
    document.getElementById("python").style.display = "none"
    primeiraAreaTexto.innerHTML = "Estou certo que juntos poderemos trilhar caminhos inimaginaveis."
    segundaAreaText.innerHTML = "*Passe o mouse por cima dos cards para ler sobre*"

}

/* Modal */
document.getElementById("modalAlert").addEventListener("click", () => {
    document.getElementById("modal").style.display = "flex"
});
document.getElementById("btnModal").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none"
});


/* Contatos */

function localiza(local) {
    switch (local) {
        case "zexer":
            window.open("https://zexer.vercel.app", "_blank")
            break
        case "oldgym":
            window.open("https://oldgym.vercel.app", "_blank")
            break
        case "github":
            window.open("https://github.com/Ronaldo-Vieira-Lira", "_blank")
            break
        case "linkedin":
            window.open("https://www.linkedin.com/in/ronaldo-vieira-lira/", "_blank")
            break
        case "email":
            window.location = "mailto:ronaldo.vieiralira@gmail.com"
            break
    };
};