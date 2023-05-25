const header = document.getElementById('header')
const menu = document.getElementById('menu')

menu.addEventListener('click', () => {
    if(header.classList.contains('active')){
        header.classList.remove('active')
    } else{
        header.classList.add('active')
    }
})