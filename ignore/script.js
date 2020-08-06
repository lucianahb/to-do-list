const inputSearch = document.querySelector('.input_search');
const btnSearch = document.querySelector('.btn_search');
// const errorSearch = document.querySelector('.error');

const btnAdd = document.querySelector('.btn_add');
// const errorAdd = document.querySelector('.error_add');

const toDoList = document.querySelector('.to_do');
const btnDone = document.querySelectorAll('.btn_done');
const btnRemove = document.querySelectorAll('.btn_remove');


//função do novo item da lista 
function createListItem(listItemContent) {
    //vou criar essa variável pq na linha 18 
    const listItems = document.querySelectorAll('.to-do-list');

    const li = document.createElement('li');
    li.classList.add('to-do-list');
    li.setAttribute('data-index', listItems.length);

    const btnDone = document.createElement('button');
    btnDone.classList.add('btn_done');
    btnDone.innerHTML = '&#10003;';
    btnDone.addEventListener('click', done);

    const btnRemove = document.createElement('button');
    btnRemove.classList.add('btn_remove');
    btnRemove.innerHTML = '&times;';
    btnRemove.addEventListener('click', remove);

    li.textContent = listItemContent;
    li.appendChild(btnDone);
    li.appendChild(btnRemove);

    return li;
}

// função para pegar o valor do input
function addListItem() {
    const inputAdd = document.querySelector('.input_add');
    const inputAddValue = inputAdd.value;

    if (inputAddValue != '') {
        const newListItem = createListItem(inputAddValue);

        toDoList.appendChild(newListItem);
    }
}
//evento quando clico, ele faz a função acima, da linha 50
btnAdd.addEventListener('click', addListItem);


function done(event) {
    const btnDone = this;
    const parentListItem = btnDone.parentNode;
    
    parentListItem.classList.add('to-do-list--done')
}
buttonsDone.forEach(function (el) {
    el.addEventListener('click', done);
});


//(???)
function remove(event) {
    const btnRemove = this;
    const parentListItem = btnRemove.parentNode;
    const parentListItemIndex = parentListItem.dataset.index;
    const listItems = Array.from(document.querySelectorAll('.to-do-list'));

    // const newListItems = listItems.filter(function (item) { 
    //     if (item.dataset.index !== parentListItemIndex) {
    //         return item;
    //     }
    // });

    let newListItems = listItems.filter(item => item.dataset.index !== parentListItemIndex);
    newListItems = newListItems.map(function(item, index) {
        item.setAttribute('data-index', index);
        
        return item;
    });
    
    toDoList.innerHTML = '';
     
    newListItems.forEach(function (el) {
        toDoList.appendChild(el);
    })
}
buttonsRemove.forEach(function (el) {
    el.addEventListener('click', remove);
});
