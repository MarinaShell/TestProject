document.querySelector('#testTextField').addEventListener('click', 
  function(event) {
    event.preventDefault();
    const name = prompt("введите текст");
    this.textContent = name;
})