const consolelog = document.querySelector('#consoleLog');
consolelog.addEventListener('click', ()=>{
    alert('Служит для вывода информации в консоль');
}
);

const alertLog = document.querySelector('#alert');
alertLog.addEventListener('click', ()=>{
    alert('Функция alert() предназначена для вывода в браузере'+ 
    'предупреждающего модального диалогового окна с некоторым'+ 
    'сообщением и кнопкой «ОК».');
}
);

const promtLog = document.querySelector('#prompt');
promtLog.addEventListener('click', ()=>{
    alert('Метод prompt() предназначен для вывода диалогового'+
    'окна с сообщением, текстовым полем для ввода данных и кнопками'+
    ' «ОК» и «Отмена». Это окно предназначено для запроса данных,'+
    ' которые пользователю нужно ввести в текстовое поле.');
}
);