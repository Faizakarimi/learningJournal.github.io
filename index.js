const navbarEl = document.getElementById('links')
const viewMoreBtn = document.getElementById('viewMore-btn')
const hiddenArticles = document.getElementsByClassName('hidden')
// console.log(hiddenArticles)

document.getElementById('menu-icon').addEventListener('click', function () {
    if (navbarEl.style.display === 'flex') {
        navbarEl.style.display = 'none';

    }

    else {
        navbarEl.style.display = 'flex';
    }
})


viewMoreBtn.addEventListener('click', function(){
    for (let i = 0; i< hiddenArticles.length; i++){
        hiddenArticles[i].style.display = 'block'
    }
    
    viewMoreBtn.style.display = 'none'

})