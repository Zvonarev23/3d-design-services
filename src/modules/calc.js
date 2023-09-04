import { animate } from "./helper"

const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block')
  const calcType = calcBlock.querySelector('.calc-type')
  const calcSquare = calcBlock.querySelector('.calc-square')
  const calcCount = calcBlock.querySelector('.calc-count')
  const calcDay = calcBlock.querySelector('.calc-day')
  const spanTotal = document.getElementById('total')

  const countCalc = () => {
    const calcTypeValue = calcType.value
    const calcSquareValue = calcSquare.value
    const calcCountValue = calcCount.value
    const calcDayValue = calcDay.value
    let total = 0
    let countValue = 1
    let dayValue = 1

    if (calcCountValue > 1) {
      countValue += calcCountValue / 10
    }

    if (calcDayValue && calcDayValue < 5) {
      dayValue = 2
    } else if (calcDayValue && calcDayValue < 10) {
      dayValue = 1.5
    } else {
      dayValue = 1
    }

    if (calcTypeValue && calcSquareValue) {
      total = +calcTypeValue * +calcSquareValue * price * countValue * dayValue 
    }

    animate({
      duration: 100,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        spanTotal.textContent = Math.floor(progress * total);
      }
    });
  }

  calcBlock.addEventListener('input', (e) => {
    countCalc()
  })
}

export default calc



