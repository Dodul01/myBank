const withdrowBtn = document.getElementById('withdrowBtn');

withdrowBtn.addEventListener('click', ()=> {
  const withdrowValue = getInputValue('withdrowInputValue');
  const prevWithdrowAmmount = getPrevAmmount('withdrow');
  const withdrowSum = prevWithdrowAmmount + withdrowValue; 
  const prevBalance = getPrevAmmount('balance');
  const newBalance = prevBalance - withdrowValue;
  setAmmount(withdrowSum ,'withdrow');
  setAmmount(newBalance, 'balance');
});