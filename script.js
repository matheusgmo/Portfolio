const menu = document.getElementById('menu')
const header = document.getElementById('header')

menu.addEventListener('click', () => {
    if(header.classList.contains('active')){
        header.classList.remove('active')
    } else{
        header.classList.add('active')
    }
})