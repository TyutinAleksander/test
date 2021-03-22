// вывод сообщения о успешной аутентификации
document.getElementById('button').addEventListener('click', schmyak);
var dm = document.getElementById("email");

function schmyak(){
    if (ValidPass() && emailValid)
        alert('Вы успешно авторизовались!');
}