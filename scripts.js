document.addEventListener('DOMContentLoaded', function () {
    const hamburgerButton = document.getElementById('hamburgerMenu')
    const mainNav = document.getElementById('mainNav')

    hamburgerButton.addEventListener('click', function () {
        mainNav.classList.toggle('nav-open')
        const icon = hamburgerButton.querySelector('i')
        if (mainNav.classList.contains('nav-open')) {
            icon.classList.remove('fa-bars')
            icon.classList.add('fa-times')
            hamburgerButton.setAttribute('aria-label', 'Fechar Menu')
        } else {
            icon.classList.remove('fa-times')
            icon.classList.add('fa-bars')
            hamburgerButton.setAttribute('aria-label', 'Abrir Menu')
        }
    })

    mainNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('nav-open')
            hamburgerButton.querySelector('i').classList.remove('fa-times')
            hamburgerButton.querySelector('i').classList.add('fa-bars')
            hamburgerButton.setAttribute('aria-label', 'Abrir Menu')
        })
    })
})
