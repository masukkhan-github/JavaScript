const buttons = document.querySelectorAll('.button')
buttons.forEach((btn)=>{
  console.log(btn)
  btn.addEventListener('click',(e)=>{
    // console.log(e.target)
    if(e.target.id === 'blue' || e.target.id === 'yellow' || e.target.id === 'white' || e.target.id === 'grey'){
      document.querySelector('body').style.backgroundColor = e.target.id
    }
  })
})