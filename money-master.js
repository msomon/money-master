
function allCost(input){
    const inputText = document.getElementById(input) ;
    const inputValue = parseFloat(inputText.value); 
   return inputValue ;
}

document.getElementById('calculate').addEventListener('click',function(){
  const food = allCost('food'); 
const rent = allCost('rent');
const cloth = allCost('cloth');

const totalExpense = document.getElementById('expense');
  totalExpense.innerText = food + rent + cloth ;
  
  const incomeMoney = document.getElementById('income');
  const income = incomeMoney.value ;

  const balanceMoney = document.getElementById('balance');
 const balance = parseFloat(balanceMoney.innerText);
 balanceMoney.innerText = income - totalExpense.innerText  ;
 
// if(totalExpense.innerText > income){
//   const notify = document.getElementById('notify-number');
//   notify.style.display = 'block'
// }else{
//   balanceMoney.innerText = income - totalExpense.innerText  ;
// }

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

   //     error   //
  //  const totalExpense = document.getElementById('expense');
  //  const incomeMoneys = document.getElementById('income');
  //  const total = totalExpense.innerText + savingAmount.innerText
  //  if(total >incomeMoneys.value){
  //   const notify = document.getElementById('notify-number');
  //     notify.style.display = 'block'
  //  }else{
  //   remainingBalance.innerText = balance.innerText - savingAmount.innerText ;
  //  }
})