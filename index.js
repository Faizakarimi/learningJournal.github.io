const navbarEl = document.getElementById('links')
const viewMoreBtn = document.getElementById('viewMore-btn')
const hiddenArticles = document.getElementsByClassName('hidden')

document.getElementById('menu-icon').addEventListener('click', function () {
    if (navbarEl.style.display === 'flex') {
        navbarEl.style.display = 'none';

    }

    else {
        navbarEl.style.display = 'flex';
    }
})

viewMoreBtn.addEventListener('click', function(){
    for (let i of hiddenArticles){
        hiddenArticles[0]
    }
    

})