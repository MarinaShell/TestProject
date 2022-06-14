document.querySelector('#buttonUser').addEventListener('click', 
  function(event) {
    event.preventDefault();
    textTmp = textUser.value;
    console.log(textTmp);
    duplicateField.textContent ='';
    textUser.value = '';
})

document.querySelector('#textUser').addEventListener('keyup', 
  function(event) {
    textTmp = textUser.value;
     duplicateField.textContent = textTmp;
})