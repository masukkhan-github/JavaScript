const form = document.querySelector('form')
const result = document.querySelector('#results')


form.addEventListener('submit',function (e){
 e.preventDefault();

 const height = parseInt(document.querySelector('#height').value)
 
 const weight = parseInt(document.querySelector('#weight').value)

 if(height ==='' || height < 0 || isNaN(height)){
    result.innerHTML = 'please enter valid height'
 }else if(weight ==='' || weight < 0 || isNaN(weight)){
  result.innerHTML = 'please enter valid weight'
 }else {
   const bmi =( weight / ((height*height)/10000)).toFixed(2)
   
   if(bmi<18.6){
    result.innerHTML = `<span>${bmi}</span><br><b>Under Weight</b>`
   
   }else if(bmi>=18.6 && bmi<=24.9){
     result.innerHTML = `<span>${bmi}</span><br><b>Normal Range</b>`
   }else{
    result.innerHTML = `<span>${bmi}</span><br><b>Over weight</b>`
   }
 }

})

