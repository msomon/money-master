
function allCost(input){
  const inputText = document.getElementById(input) ;
const inputCost = parseFloat(inputText.value);
if( inputCost < 0){
  inputText.value = ""
    return alert('Please Give Positive Number ')
}else{
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
  
  // const incomeMoneyText = document.getElementById('income');
  const incomeMoney = allCost('income')
  const balanceText = document.getElementById('balance');
 
 if(totalExpense.innerText > incomeMoney.value ){
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
   
   
})