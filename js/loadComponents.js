document.addEventListener('DOMContentLoaded', function () {
    function loadHtmlComponent(selector, filePath, callback) {
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText)
                }
                return response.text()
            })
            .then((html) => {
                const element = document.querySelector(selector)
                if (element) {
                    element.innerHTML = html
                    if (callback && typeof callback === 'function') {
                        callback()
                    }
                } else {
                    console.error(`Element with selector "${selector}" not found.`)
                }
            })
            .catch((error) => {
                console.error('Error loading component:', error)
            })
    }

    loadHtmlComponent('#navbar-placeholder', '/components/navbar.html', function () {
        const hamburgerButton = document.getElementById('hamburgerMenu')
        const mainNav = document.getElementById('mainNav')

        if (hamburgerButton && mainNav) {
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
        }
    })
})
