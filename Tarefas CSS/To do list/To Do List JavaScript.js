//To Do List JavaScript

let tasks = {
        // Colocar as informações de cada tarefa (nome, done etc.)
}

function adicionar (/* Parâmetros da task: nome, número de tarefas etc. */) {
    // Você cria uma nova task (objeto com variáveis e não o elemento HTML) e a adiciona na let tasks (tasks.push)
    // atualizar() -> Chamar, no final da função, a função atualizar para colocar o elemento no HTML
}

function atualizar() {
    // let item = document.createElement('div')
    // item.className = 'card'
    // document.getElementById('card_s').appendChild(item)

    /*
        1. Limpar a section "card"
        2. Adicionar todas as tasks nela
            2.1. Por meio de um for que vai passar pela let tasks
            2.2. Nesse for, você fará todo o processo de createElements e appendChilds com os valores de cada objeto das tasks
        3. Adicionar o botão de "+"
    */
}

/*
<a href="#">
    <div class="card">
        <div class="icon">
            <span class="material-symbols-outlined">import_contacts</span>
        </div>
        <div class="nametask">
            <h2>School</h2>
        </div>
        <div class="done">
            <div>4/8 done</div>
            <div class="circle">
                <div class="fill"></div>
            </div>
        </div>
    </div>
    </a>
    <a href="#">
    <div class="card blue">
        <div class="icon">
            <span class="material-symbols-outlined">import_contacts</span>
        </div>
        <div class="nametask">
            <h2>School</h2>
        </div>
        <div class="done">
            <div>4/8 done</div>
            <div class="circle">
                <div class="fill"></div>
            </div>
        </div>
    </div>
    </a>

<div class="add">
    <a href="#">
        <div class="more" onclick="adicionar()"><span class="material-symbols-outlined">add</span></div>
    </a>
</div>
*/