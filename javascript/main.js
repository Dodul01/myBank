const getInputValue = (inputElement)=>{
  const inputFild = document.getElementById(inputElement);
  const inputString = inputFild.value;
  const inputValue = parseInt(inputString);
  inputFild.value = ''

  return inputValue;
}

const getPrevAmmount = (element) =>{
  const prevAmmountElement = document.getElementById(element);
  const prevAmmountText = prevAmmountElement.innerText;
  const prevAmmount = parseInt(prevAmmountText);

  return prevAmmount;
}

const setAmmount = (sum,element) =>{
  const setValueElement = document.getElementById(element);
  return setValueElement.innerText = sum;
}