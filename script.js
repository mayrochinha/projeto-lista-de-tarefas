/**
 * document.getElementById("submit") irá pegar o elemento
 * na DOM com id=submit
 */
const button = document.getElementById("submit");

/**
 * Aqui eu crio uma variável tasks que é um Array que irá receber logo adiante a minha variável task,
 * se tornando assim, uma lista de task
 */
const tasks = [];

/**
 * Essa função add(), irá ser executada quando um evento de click acontecer no botão
 */
function add(){
    
    /**
     * Aqui estou pegando o valor do elemento da DOM que possui o id=entrada
     * O valor é uma string, ou seja, aquilo que o usuário digitou
     */
    const input = document.getElementById("entrada").value;

    /**
     * Aqui estou pegando a hora atual e atribuindo na variável time.
     * O Objeto Date é o principal objeto do Javascript para manipulação de data e hora.
     */
    const time = new Date().toLocaleTimeString()

    /**
     * Aqui eu crio um objeto chamado task, esse objeto terá duas propriedades.
     * São elas: name e clock.
     * OBS: Proproiedades ou atributos refere-se apenas no contexto de objetos e são a mesma coisa, com nomes diferentes.
     * Quando estamos no contexto de funções são chamados de variáveis.
     */
    const task = {
        name: input,
        clock: time
    };

    /**
     * Aqui estou adicionando o objeto task na lista de tasks
     */
    tasks.push(task);

    /**
     * TODO:
     * Formatar uma string na mesma estrutura do seguinte HTML
     * <li>
          <p>Task 1</p>
          <p>13:00:00</p>
        </li>
     */

    /**
     * Essa variável li irá receber o html <li> em formato string, por que
     * o javascript não aceita tags HTML.
     */
    let li = ''

    /**
     * Esse laço de repetição irá percorrer a lista de tasks e para cada task encontrada
     * irá formatar uma li. A variável li terá esse conteúdo concatenado em cada repetição do for. 
     */
    for(const t of tasks) {
        li += `
        <li>
            <p>${t.name}</p>
            <span>${t.clock}</span>
        </li>
        `
    }

    /**
     * Aqui estou pegando o elemento ul na dom, que possui o id=list
     * e injetando a li formatada nos passos acima dentro da ul.
     */
    const ul = document.getElementById('list')
    ul.innerHTML = li
    
}


/**
 * Aqui estou adicionando um evento de click no botão, que irá executar
 * a função add() sempre que um click ocorrer.
 */
button.addEventListener("click", add);
