document.getElementById('calculate').addEventListener('click',function(){
 
  const foodCost = document.getElementById('food') ;
  const rentCost = document.getElementById('rent');
  const clothCost = document.getElementById('cloth');
  const food = parseFloat(foodCost.value);
  const rent = parseFloat(rentCost.value);
  const cloth = parseFloat(clothCost.value);
 let total = food + rent + cloth ;

  let allTotal = document.getElementById('expense');
   allTotal.innerText = total + allTotal ;
})