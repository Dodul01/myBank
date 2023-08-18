const depositBtn = document.getElementById('depositBtn');

depositBtn.addEventListener('click', ()=> {
  const depositAmmount = getInputValue('depositInputValue');
  const prevDepositAmmount = getPrevAmmount('deposit');
  const depositSum = prevDepositAmmount + depositAmmount;
  const prevBalance = getPrevAmmount('balance');

  if(isNaN(depositAmmount)){
    return alert('Input value should be number.')
  }

  setAmmount(depositSum, 'deposit')
  const newBalance = prevBalance + depositAmmount;
  
  setAmmount(newBalance, 'balance');
});