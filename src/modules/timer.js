const timer = (deadline) => {
  const timerHours = document.getElementById('timer-hours')
  const timerMinutes = document.getElementById('timer-minutes')
  const timerSeconds = document.getElementById('timer-seconds')

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime()
    let dateNow = new Date().getTime()
    let timeRemaining = (dateStop - dateNow) / 1000
    let hours = Math.floor((timeRemaining / 60 / 60) % 24) 
    let minutes = Math.floor((timeRemaining / 60) % 60)
    let seconds = Math.floor(timeRemaining % 60)

    return {timeRemaining, hours, minutes, seconds}
  }

  const updateClock = () => {
    let getTime = getTimeRemaining()

    let checkNumber = function(num) {
      if (num < 10) {
        return '0' + num
      } else {
        return num
      }
    }

    timerHours.textContent = checkNumber(getTime.hours)
    timerMinutes.textContent = checkNumber(getTime.minutes)
    timerSeconds.textContent = checkNumber(getTime.seconds)

    if (getTime.timeRemaining < 0) {
      clearInterval(startTimer)
      timerHours.textContent = '00'
      timerMinutes.textContent = '00'
      timerSeconds.textContent = '00'
    }
  }

  let startTimer = setInterval(updateClock, 1000)
}

export default timer