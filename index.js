let aboutBtnEl = document.getElementById("aboutButton");
let timeToVisitBtnEl = document.getElementById("timeToVisitButton")
let attractionsBtnEl = document.getElementById("attractionsButton")

let aboutTabEl = document.getElementById("aboutTab");
let timeToVisitTabEl = document.getElementById("timeToVisitTab");
let attractionsTabEl = document.getElementById("attractionsTab");
timeToVisitTabEl.classList.add("d-none")
attractionsTabEl.classList.add("d-none")

function aboutTrip() {
    aboutBtnEl.classList.add("selected-button")
    timeToVisitBtnEl.classList.remove("selected-button")
    attractionsBtnEl.classList.remove("selected-button")

    aboutTabEl.classList.remove("d-none")
    timeToVisitTabEl.classList.add("d-none")
    attractionsTabEl.classList.add("d-none")
}

function aboutTime() {
    aboutBtnEl.classList.remove("selected-button")
    timeToVisitBtnEl.classList.add("selected-button")
    attractionsBtnEl.classList.remove("selected-button")

    aboutTabEl.classList.add("d-none")
    timeToVisitTabEl.classList.remove("d-none")
    attractionsTabEl.classList.add("d-none")
}

function aboutPlace() {
    aboutBtnEl.classList.remove("selected-button")
    timeToVisitBtnEl.classList.remove("selected-button")
    attractionsBtnEl.classList.add("selected-button")

    aboutTabEl.classList.add("d-none")
    timeToVisitTabEl.classList.add("d-none")
    attractionsTabEl.classList.remove("d-none")

}