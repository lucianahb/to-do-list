const inputSearch = document.querySelector('.input_search');
const btnSearch = document.querySelector('.btn_search');
// const errorSearch = document.querySelector('.error');
const formAdd = document.querySelector('.form-add');
const btnAdd = document.querySelector('.btn_add');
// const errorAdd = document.querySelector('.error_add');

const toDoList = document.querySelector('.to_do');
const btnDoneAll = document.querySelectorAll('.btn_done');
const btnRemoveAll = document.querySelectorAll('.btn_remove');
const btnDeleteAllList = document.querySelector('.btn_delete_all');

//função do novo item da lista 
function createListItem(listItemContent) {
    const li = document.createElement('li');
    li.classList.add('to-do-list');

    //aqui to só criando o btn de done
    const btnDone = document.createElement('button');
    btnDone.classList.add('btn_done');
    btnDone.innerHTML = '&#10003;';
    btnDone.addEventListener('click', done);
    //essa função "done" está ali embaixo

    //aqui to só criando o btn de remove
    const btnRemove = document.createElement('button');
    btnRemove.classList.add('btn_remove');
    btnRemove.innerHTML = '&times;';
    btnRemove.addEventListener('click', remove);
    //essa função "remove" está ali embaixo

    //agora vou alimentar o li > o texto, depois o btn de done e depois de remove
    li.textContent = listItemContent;
    //esse "listItemContent" é o parâmetro DESTA função
    li.appendChild(btnDone);
    li.appendChild(btnRemove);

    return li;
    //li criada. maaaas só vou "criar ela" se eu chamar a função, que é a "createListItem"
}

// função para pegar o valor do input
function addListItem(event) {
    //aqui ele evita que o submit faça a página recarregar
    event.preventDefault();
    const inputAdd = document.querySelector('.input_add');
    const inputAddValue = inputAdd.value;

    if (inputAddValue != '') {
        const newListItem = createListItem(inputAddValue);

        toDoList.appendChild(newListItem);
        //toDoList é o ul do HTML

        inputAdd.value = '';
        //ISSO AQUI DEIXA O INPUT VAZIOOOOOO O/
    }
}
//evento quando clico, ele faz a função acima
formAdd.addEventListener('submit', addListItem);



function done() {
    const btnDone = this;
    //"this" é o contexto no qual a função foi executada, no caso o btnDone
    const parentListItem = btnDone.parentNode;// parentNode é o li, nesse caso
    
    parentListItem.classList.add('to-do-list-done'); //estou adicionando uma classe. Com ela posso estilizar no css, que foi o que fiz :)
}
//aqui vou pegar todos os btnDone que estiverem na pág, para cada btn, quando ou clicar no btnDone, vou executar a função acima
btnDoneAll.forEach(function (el) {
    el.addEventListener('click', done);
});


function remove() {
    const btnRemove = this; //expliquei lá em cima
    const parentListItem = btnRemove.parentNode;
    toDoList.removeChild(parentListItem);
    //o removeChild remove aquele parentListItem
}
btnRemoveAll.forEach(function (el) {
    el.addEventListener('click', remove);
});

//fazer funcionar o search
// function searchListItems(searchTerm) {




//btnAdd = teclado enter


//fazer funcionar o botão de deletar todos 
btnDeleteAllList.addEventListener('click', function() {
    const list = document.querySelectorAll('.to-do-list');
    
    for (let i = 0; i < list.length; i++) {
        list[i].remove();
    }
})