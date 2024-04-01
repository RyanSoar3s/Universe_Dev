const scroll_menu = document.querySelectorAll('.ul-link a[href^="#"]')

function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href")
    return document.querySelector(id).offsetTop

}


function scrolling(distance_from_the_top) {
    window.scroll({
        top: distance_from_the_top,
        behavior: "smooth"

    })

}


function scrollToArea(event) {
    event.preventDefault()
    const distance_from_the_top = getDistanceFromTheTop(event.target) - 150
    scrolling(distance_from_the_top)

}


scroll_menu.forEach((link) => {
    link.addEventListener("click", scrollToArea)

})