

document.getElementById('calculate').addEventListener('click',function(){
 
 
  const foodCost = document.getElementById('food') ;
  const rentCost = document.getElementById('rent');
  const clothCost = document.getElementById('cloth');
  const food = parseFloat(foodCost.value);
  const rent = parseFloat(rentCost.value);
  const cloth = parseFloat(clothCost.value);
 const total = food + rent + cloth ;
 
  const totalExpense = document.getElementById('expense');
  // const expense = parseFloat(totalExpense.innerText);
  totalExpense.innerText = total  ; 

  const incomeMoney = document.getElementById('income');
  const balanceMoney = document.getElementById('balance');
 const income = incomeMoney.value
 const balance = parseFloat(balanceMoney.innerText);
 balanceMoney.innerText = income - totalExpense.innerText  ;
//  balanceMoney.innerText = balanceTotal

})
document.getElementById('save-btn').addEventListener('click',function(){
  const save = document.getElementById('save');
  const balanceMoney = document.getElementById('balance');
  const savingAmount = document.getElementById('saving-amount');
    // const saveAmount =  parseFloat(balanceMoney.innerText) / parseFloat(save.value) ;
    const saveAmount =balanceMoney.innerText / save.value;
    savingAmount.innerText = saveAmount ;
  

})