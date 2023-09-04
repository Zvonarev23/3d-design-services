const slider = () => {
  const sliderBlock = document.querySelector('.portfolio-content')
  const slides = sliderBlock.querySelectorAll('.portfolio-item')
  const dots = sliderBlock.querySelectorAll('.dot')
  let sliderCount = 0;
  let interval;

  const prevSlide = (elems, index, str) => {
    elems[index].classList.remove(str)
  }

  const nextSlide = (elems, index, str) => {
    elems[index].classList.add(str)
  } 

  const autoSlide = () => {
    prevSlide(slides, sliderCount, 'portfolio-item-active')
    prevSlide(dots, sliderCount, 'dot-active')

    sliderCount++
    
    if (sliderCount > slides.length - 1) {
      sliderCount = 0
    }

    nextSlide(slides, sliderCount, 'portfolio-item-active')
    nextSlide(dots, sliderCount, 'dot-active')
  }

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault()

    if (!e.target.matches('.portfolio-btn, .dot')) {
      return
    }

    prevSlide(slides, sliderCount, 'portfolio-item-active')
    prevSlide(dots, sliderCount, 'dot-active')

    if (e.target.matches('.portfolio-btn.next')) {
      sliderCount++
    } else if (e.target.matches('.portfolio-btn.prev')) {
      sliderCount--
    } else if (e.target.classList.contains('dot')) {
      dots.forEach((dot, index) => {
        if (dot === e.target) {
          sliderCount = index
        }
      })
    }

    if (sliderCount > slides.length - 1) {
      sliderCount = 0
    }    

    if (sliderCount < 0 ) {
      sliderCount = slides.length - 1
    }

    nextSlide(slides, sliderCount, 'portfolio-item-active')
    nextSlide(dots, sliderCount, 'dot-active')
  })

  sliderBlock.addEventListener('mouseenter', (e) => {
    if (e.target.matches('.portfolio-btn, .dot')) {
      stopSlider()
    }
  }, true)

  sliderBlock.addEventListener('mouseleave', (e) => {
    if (e.target.matches('.portfolio-btn, .dot')) {
      startSlider()
    }
  }, true)

  const startSlider = () => {
    interval = setInterval(autoSlide, 2000)
  }

  const stopSlider = () => {
    clearInterval(interval)
  }

  startSlider()
}

export default slider