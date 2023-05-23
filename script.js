const header = document.getElementById('header')
const menu = document.getElementById('menu')

menu.addEventListener('click', () => {
    if(menu.classList.contains('active')){
        menu.classList.remove('active')
        header.classList.remove('active')
    }else{
        menu.classList.add('active')
        header.classList.add('active')
    }
})