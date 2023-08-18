const withdrowBtn = document.getElementById('withdrowBtn');

withdrowBtn.addEventListener('click', ()=> {
  const withdrowAmmount = getInputValue('withdrowInputValue');
  const prevWithdrowAmmount = getPrevAmmount('withdrow');
  const withdrowSum = prevWithdrowAmmount + withdrowAmmount; 
  const prevBalance = getPrevAmmount('balance');

  const newBalance = prevBalance - withdrowAmmount;

  if(isNaN(withdrowAmmount)){
    return alert('Input value should be number.')
  }

  setAmmount(withdrowSum ,'withdrow');
  setAmmount(newBalance, 'balance');
});