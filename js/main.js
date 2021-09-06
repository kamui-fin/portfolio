function toggleNav() {
    const navBar = document.querySelector('nav.navbar')
    navBar.classList.toggle('hidden')
}

const hamburgerButton = document.querySelector('.menu-icon')
hamburgerButton.addEventListener('click', toggleNav)

// Video demo functionality
const firstProject = document.querySelector('.project')
const video = firstProject.querySelector('video')
const timestamps = firstProject.querySelectorAll('.time')
timestamps.forEach((e) => {
    e.addEventListener('click', (t) => {
        const [m, s] = t.target.text
            .split(':')
            .slice(0, 2)
            .map((e) => Number.parseInt(e))

        const sec = m * 60 + s
        video.currentTime = sec
    })
})
