const validation = () => {
  const inputsCalc = document.querySelectorAll('input.calc-item')
  const formInputsTel = document.querySelectorAll('[type="tel"]')
  const formInputsText = document.querySelectorAll('[name="user_name"]')
  const formInputsEmail = document.querySelectorAll('[type="email"]')

  inputsCalc.forEach(element => element.addEventListener('input', () => {
    element.value = element.value.replace(/[^\d]/gi, '');
  }))

  formInputsText.forEach(element => element.addEventListener('input', () => {
    element.value = element.value.replace(/[^а-я\s\-]/gi, '');
  }))

  formInputsEmail.forEach(element => element.addEventListener('input', () => {
    element.value = element.value.replace(/[^a-z\@\-_\.\!\~*']/gi, '');
  }))

  formInputsTel.forEach(element => element.addEventListener('input', () => {
    element.value = element.value.replace(/[^\d\(\)\-]/gi, '');
  }))
}

export default validation