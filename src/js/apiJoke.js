const setupElement = document.getElementById("setup");
const punchlineElement = document.getElementById("punchline");
const jokeButton = document.getElementById("btn");

// controla se estamos mostrando a punchline
let isPunchlineVisible = false;

function fetchJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            // exibe o setup (início da piada) e esconde a punchline
            setupElement.textContent = data.setup;
            punchlineElement.textContent = data.punchline;
            punchlineElement.style.display = "none"; // esconde a punchline no começo
            isPunchlineVisible = true; // define que a punchline ta oculta
            jokeButton.textContent = "Mostrar Resposta"; // altera o texto do botão
        })
        .catch(error => {
            console.log("Error fetching joke: ", error);
            setupElement.textContent = "Falha ao buscar piada.";
            punchlineElement.textContent = "";
        });
}

jokeButton.addEventListener("click", function () {
    if (isPunchlineVisible) {
        //se a punchline estiver oculta, vai mostrar
        punchlineElement.style.display = "block";
        jokeButton.textContent = "Nova piada";
        isPunchlineVisible = false; // marca que a punchline já está visível
    } else {
        // Se a punchline estiver visível, busca uma nova piada
        fetchJoke();
    }
});

//define o texto inicial antes da primeira piada
setupElement.textContent = "Clique no botão para gerar uma piada:";
punchlineElement.textContent = ""; // garante que a punchline está vazia inicialmente
