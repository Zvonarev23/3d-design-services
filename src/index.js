import timer from "./modules/timer"
import menu from "./modules/menu"
import modal from "./modules/modal"
import smoothScroll from "./modules/smoothScroll"
import validation from "./modules/validation"
import tabs from "./modules/tabs"
import slider from "./modules/slider"
import calc from './modules/calc'
import {swiperSlider} from "./modules/swiperSlider"
import {sendForm} from "./modules/sendForm"

timer('10 january 2023 21:44:20')
menu()
modal()
smoothScroll()
validation()
tabs()
slider()
calc()
swiperSlider()
sendForm({ 
  formId: 'form1', 
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ] 
})
sendForm({ formId: 'form2' })
sendForm({ formId: 'form3' })
