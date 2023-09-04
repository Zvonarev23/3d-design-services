const tabs = () => {
    const tabsPanel = document.querySelector('.service-header')
    const tabsContent = document.querySelectorAll('.service-tab')
    const tabs = document.querySelectorAll('.service-header-tab')
    
    tabsPanel.addEventListener('click', (e) => {
      if (e.target.closest('.service-header-tab')) {
        const tabBtn = e.target.closest('.service-header-tab')
        tabs.forEach((tab, index) => {
          if (tab === tabBtn) {
            tab.classList.add('active')
            tabsContent[index].classList.remove('d-none')
          } else {
            tab.classList.remove('active')
            tabsContent[index].classList.add('d-none')
          }
        })
      }
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // tabs.forEach(tab => {
    //   tab.addEventListener('click', (e) => {
    //     if (!e.target.classList.contains('active')) {
    //       e.target.classList.add('active')
    //     } 
    //     else {
    //       tab.classList.remove('active')
    //     }
    //   })
    // })
    // // tabsPanel.addEventListener('click', (e) => {
    // //   if (e.target.classList.contains('service-header-tab')) {
    // //     e.target.classList.add('active')
    // //   } else {
    // //     e.target.classList.remove('active')
    // //   }
    // // })
}

export default tabs