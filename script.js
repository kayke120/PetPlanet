// Seleciona os elementos do HTML
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
// Variável para armazenar o valor do contador
let count = 0;
// Função para atualizar o contador no HTML
function updateCounter() {
    counterElement.textContent = count;
}
// Função para incrementar o contador
function increment() {
    count++;
    updateCounter();
}
// Função para decrementar o contador
function decrement() {
    if (count > 0) {
        count--;
        updateCounter();
    }
}
// Adiciona eventos de clique aos botões
incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);