
function allCost(input){
  const notifiy = document.getElementById('notify-number')
  
    const inputText = document.getElementById(input) ;
    const inputValue = parseFloat(inputText.value); 
   return inputValue ;

}

document.getElementById('calculate').addEventListener('click',function(){

  const total = allCost('food') + allCost('rent') + allCost('cloth') ;
  const totalExpense = document.getElementById('expense');
  totalExpense.innerText = total  ; 
  
  const incomeMoney = document.getElementById('income');
  const balanceMoney = document.getElementById('balance');
  // const totalExpense = document.getElementById('expense'); 
 const income = incomeMoney.value
 const balance = parseFloat(balanceMoney.innerText);
 balanceMoney.innerText = income - totalExpense.innerText  ;
//  balanceMoney.innerText = balanceTotal

})

document.getElementById('save-btn').addEventListener('click',function(){
  const save = document.getElementById('save');
  const incomeMoney = document.getElementById('income');
  const savingAmount = document.getElementById('saving-amount');
    const saveAmount = incomeMoney.value * (save.value / 100);
    savingAmount.innerText = saveAmount ;
   const balance = document.getElementById('balance');
   const remainingBalance = document.getElementById('remaining-balance');
   remainingBalance.innerText = balance.innerText - savingAmount.innerText ;
})