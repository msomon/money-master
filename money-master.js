
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
// const totalExpense = parseFloat(totalExpenseText.innerText)
totalExpense.innerText = food + rent + cloth ;
console.log(totalExpense.innerText);
  
  // const incomeMoneyText = document.getElementById('income');
  const incomeMoney = allCost('income')
  const balanceText = document.getElementById('balance');
 
 if(totalExpense.innerText > incomeMoney){
   return alert('Please Decreage Your Total Expense ')

 }else{
  balanceText.innerText = incomeMoney - totalExpense.innerText ;
 }

})
  //   add save  clic handaler  //
document.getElementById('save-btn').addEventListener('click',function(){
  const saveText = document.getElementById('save');
 const save = parseFloat(saveText.value);
  const incomeText = document.getElementById('income');
  const income = parseFloat(incomeText.value);
  const savingAmount = document.getElementById('saving-amount');
    const saveAmount = income * (save / 100);
    savingAmount.innerText = saveAmount ;

   const balance = document.getElementById('balance');
   const remainingBalance = document.getElementById('remaining-balance');
   const totalExpense = document.getElementById('expense')
 const total = parseFloat(totalExpense.innerText) + parseFloat(savingAmount.innerText) ;

 if(total > income ){
  return alert('Please Decreage Your Total Expense Or Saving Amount ')
 }
 else{
  remainingBalance.innerText = balance.innerText - savingAmount.innerText ;
 }
   
})