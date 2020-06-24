const nav = document.getElementById('nav-image')

const links = document.getElementById("nav-links")

const link = document.getElementsByClassName('nav-link')

const navIcon = document.getElementById('nav-image')


nav.addEventListener('click', function () {
    let picked = [];
    navIcon.classList.forEach(item => picked.push(item))
    if (picked.includes('fa-bars')) {
        navIcon.classList.add('fade')
        setTimeout(() => {
            navIcon.classList.add('fa-times')
            navIcon.classList.remove('fa-bars')
            navIcon.classList.remove('fade')
        }, 200)
    } else {
        navIcon.classList.remove('fa-times')
        navIcon.classList.add('fa-bars')
    }
    links.classList.toggle('shrink')
    for (let i = 0; i < link.length; i++) {
        link[i].classList.toggle('hidden')
    }
})