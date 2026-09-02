let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeName = document.getElementById("home-name")
let guestName = document.getElementById("guest-name")

let homeCount = 0
let guestCount = 0

let home = document.querySelector(".home")
let guest = document.querySelector(".guest")

let resetBtn = document.getElementById("reset-btn")

let homeLeader = document.getElementById("home-leader")
let guestLeader = document.getElementById("guest-leader")

// Team names

homeName.value = localStorage.getItem("homeName") || "HOME"
guestName.value = localStorage.getItem("guestName") || "GUEST"

homeName.addEventListener("input", function() {
    localStorage.setItem("homeName", homeName.value)
})

guestName.addEventListener("input", function() {
    localStorage.setItem("guestName", guestName.value)
})

// Timer

let time = 0
let timerInterval = null

let timerDisplay = document.getElementById("timer-display")
let startBtn = document.getElementById("start-btn")
let pauseBtn = document.getElementById("pause-btn")
let timerResetBtn = document.getElementById("timer-reset-btn")

function updateTimer() {
    let minutes = Math.floor(time / 60)
    let seconds = time % 60

    timerDisplay.textContent =
        `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
}

startBtn.addEventListener("click", function() {
    if (timerInterval !== null) {
        return
    }

    timerInterval = setInterval(function() {
        time++
        updateTimer()
    }, 1000)
})

pauseBtn.addEventListener("click", function() {
    clearInterval(timerInterval)
    timerInterval = null
})

timerResetBtn.addEventListener("click", function() {
    clearInterval(timerInterval)
    timerInterval = null

    time = 0
    updateTimer()
})

updateTimer()

// HOME buttons
home.querySelector(".add1-btn").addEventListener("click", function() {
    homeCount += 1
    updateScore()
})

home.querySelector(".add2-btn").addEventListener("click", function() {
    homeCount += 2
    updateScore()
})

home.querySelector(".add3-btn").addEventListener("click", function() {
    homeCount += 3
    updateScore()
})

home.querySelector(".minus-btn").addEventListener("click", function() {
    homeCount -= 1

    if (homeCount < 0) {
        homeCount = 0
    }

    updateScore()
})

// GUEST buttons
guest.querySelector(".add1-btn").addEventListener("click", function() {
    guestCount += 1
    updateScore()
})

guest.querySelector(".add2-btn").addEventListener("click", function() {
    guestCount += 2
    updateScore()
})

guest.querySelector(".add3-btn").addEventListener("click", function() {
    guestCount += 3
    updateScore()
})

guest.querySelector(".minus-btn").addEventListener("click", function() {
    guestCount -= 1

    if (guestCount < 0) {
        guestCount = 0
    }

    updateScore()
})

// Update scores and leader
function updateScore() {
    homeScore.textContent = homeCount
    guestScore.textContent = guestCount

    if (homeCount > guestCount) {
        homeLeader.textContent = "LEADING"
        guestLeader.textContent = ""
    } else if (guestCount > homeCount) {
        homeLeader.textContent = ""
        guestLeader.textContent = "LEADING"
    } else {
        homeLeader.textContent = ""
        guestLeader.textContent = ""
    }
}

// RESET
resetBtn.addEventListener("click", function() {
    homeCount = 0
    guestCount = 0

    updateScore()
})