/*
   OBJETIVO - quando clicar no pokedev da listagem temos que esconder o cartão do pokedev aberto 
   e mostrar o cartão correspondente ao que foi selecionado na listagem
       PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
       PASSO 2 - Identificar o evento de clique no elemento da listagem
       PASSO 3 - remover a classe aberto só do cartão que tá aberto
       PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual 
    cartão abrir
       PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
       PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem
*/

//PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
const listaSelecaoOpcoes = document.querySelectorAll(".opcao");//document é o html, querySelectorAll é busque todos os seletores (classes) que estão em pokedev
console.log(listaSelecaoOpcoes);


//PASSO 2 - Identificar o evento de clique no elemento da listagem
listaSelecaoOpcoes.forEach(opcao => {//percorre cada pokedev
    opcao.addEventListener("click", () => {
        //PASSO 3 - remover a classe aberto só do cartão que tá aberto
        esconderCartaoOpcao();

        //PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual cartão abrir
        const idOpcaoSelecionado = mostrarCartaoOpcaoSelecionado(opcao);

        //PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
        desativarOpcaoNaListagem();

        //PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem
        ativarOpcaoNaListagemSelecionadoNaListagem(idOpcaoSelecionado);
    })
})//adiciona um "ouvinte" em cada elemento da lista, que ta so esperando pelo clique. Depois eu passo como argumento o que eu estou escutando (click) e passo o que eu quero que ele faça depois que ocorrer o click (a funcao). Pra fazer a função: () => {}


function ativarOpcaoNaListagemSelecionadoNaListagem(idOpcaoSelecionado) {
    const opcaoSelecionadoNaListagem = document.getElementById(idOpcaoSelecionado);
    opcaoSelecionadoNaListagem.classList.add("ativo");
}

function desativarOpcaoNaListagem() {
    const opcaoAtivoNaListagem = document.querySelector(".ativo");
    opcaoAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoOpcaoSelecionado(opcao) {
    const idOpcaoSelecionado = opcao.attributes.id.value; //pego o valor do id
    const idDoCartaoOpcaoParaAbrir = "cartao-" + idOpcaoSelecionado; //criando um novo ID
    const cartaoOpcaoParaAbrir = document.getElementById(idDoCartaoOpcaoParaAbrir);
    cartaoOpcaoParaAbrir.classList.add("aberto"); //adicionando uma classe aberto

    return idOpcaoSelecionado;
}

function esconderCartaoOpcao() {
    const cartaoOpcaoAberto = document.querySelector(".aberto"); //busca o elemento que tem a classe aberto
    cartaoOpcaoAberto.classList.remove("aberto");//remove
}
//const devchu = document.getElementById("devchu")
//devchu.addEventListener("click", () => {}) pra fazer um por um
