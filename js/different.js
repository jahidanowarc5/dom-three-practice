

function getDepositeInputValue(){
 let depositeInput = document.getElementById('deposite-input');
 let depositeAmount = document.getElementById('deposite-field');
 let totalBalance = document.getElementById("total-balance");
 let depositeInputValue = depositeInput.value;
 depositeAmount.innerText = Number(depositeInputValue) + Number(depositeAmount.innerText);
 totalBalance.innerText = Number(depositeInputValue )+ Number(totalBalance.innerText)
 depositeInput.value = '';

};
function getWithdrawInputValue(){
    let withdrawInput = document.getElementById('withdraw-input');
    let withdrawAmount = document.getElementById('withdraw-field');
    let totalBalance = document.getElementById('total-balance');
    let withdrawInputValue = withdrawInput.value;
    withdrawAmount.innerText = Number(withdrawInputValue) + Number(withdrawAmount.innerText);
    totalBalance.innerText = Number(totalBalance.innerText) - Number(withdrawInputValue);

    withdrawInput.value = '';
}