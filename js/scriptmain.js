document.querySelectorAll('.pl').forEach(
    a=>a.addEventListener('mouseover',bolche)
  )
  function bolche(event){
    event.currentTarget.querySelector(".para2").classList.add('pl2')
  }
  
  document.querySelectorAll('.pl').forEach(
    a=>a.addEventListener('mouseout',menche)
  )
  function menche(event){
    event.currentTarget.querySelector(".para2").classList.remove('pl2')
  }

 