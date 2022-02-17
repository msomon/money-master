
function allCost(input){
  const inputText = document.getElementById(input) ;
const inputCost = parseFloat(inputText.value);
if(isNaN(inputCost) || inputCost < 0){
  inputText.value = ""
    return alert('Please Give Positive Number')
}else{
  inputText.value = ""
  return inputCost ;
}    
}
 //    add calculate clic handeler  ///

document.getElementById('calculate').addEventListener('click',function(){
  const food = allCost('food'); 
const rent = allCost('rent');
const cloth = allCost('cloth');

const totalExpense = document.getElementById('expense');
totalExpense.innerText = food + rent + cloth ;
  
  // const incomeText = document.getElementById('income');
  // const incomeMoney = incomeText.value ;
  // if(isNaN(incomeMoney) || incomeMoney < 0){
  //   incomeText.value = ""
  //     return alert('Please Give Positive Number')
  // }
  // else{
  //   incomeText.value = ""
  //   return incomeMoney ;
  // } 
  // const incomeText = document.getElementById('income');   
  const incomeMoney = allCost('income')
  

  const balanceText = document.getElementById('balance');
 
 if(totalExpense.innerText > incomeMoney ){
   return alert('Please Decreage Your Total Expense ')

 }else{
  balanceText.innerText = incomeMoney - totalExpense.innerText ;
 }

})
  //   add save  clic handaler  //
document.getElementById('save-btn').addEventListener('click',function(){
  const save = document.getElementById('save');
  const incomeText = document.getElementById('income');
  const savingAmount = document.getElementById('saving-amount');
    const saveAmount = incomeText.value * (save.value / 100);
    savingAmount.innerText = saveAmount ;
   const balance = document.getElementById('balance');
   const remainingBalance = document.getElementById('remaining-balance');

   remainingBalance.innerText = balance.innerText - savingAmount.innerText ;

   //     error handling    //
   const totalExpense = document.getElementById('expense');
   const total = totalExpense.innerText + savingAmount.innerText
   if(total >incomeText.value){
    return alert('Please Decreage Your Total Expense Or Saving')
   }else{
    remainingBalance.innerText = balance.innerText - savingAmount.innerText ;
   }
})