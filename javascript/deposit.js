const depositBtn = document.getElementById('depositBtn');

depositBtn.addEventListener('click', ()=> {
  const depositAmmount = getInputValue('depositInputValue');
  const prevDepositAmmount = getPrevAmmount('deposit');
  const depositSum = prevDepositAmmount + depositAmmount;
  const prevBalance = getPrevAmmount('balance');

  setAmmount(depositSum, 'deposit')
  const newBalance = prevBalance + depositAmmount;
  
  setAmmount(newBalance, 'balance');
});