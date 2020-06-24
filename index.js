const nav = document.getElementById('nav-image')

const links = document.getElementById("nav-links")

const link = document.getElementsByClassName('nav-link')

nav.addEventListener('click', function () {
    links.classList.toggle('shrink')
    for (let i = 0; i < link.length; i++) {
        link[i].classList.toggle('hidden')
    }
})