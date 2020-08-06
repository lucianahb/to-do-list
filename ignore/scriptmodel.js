const input = document.querySelector('.input__search')
const button = document.querySelector('.button__search')
const lista = document.getElementById('lista')


button.addEventListener('click', function() {
    lista.innerHTML += `<li>${input.value}</li>`
})
