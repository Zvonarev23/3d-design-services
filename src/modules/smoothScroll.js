const smoothScroll = () => {
  const anchors = document.querySelectorAll('ul > li > a')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockId = anchor.getAttribute('href').substring(1)

      document.getElementById(blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
}

export default smoothScroll