var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var char = document.getElementById("char");

// Когда пользователь нажимает на поле пароль, появляется окно сообщения
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// Когда пользователь щелкает за пределами поля пароля, скройте окно сообщения
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// Когда пользователь начинает вводить что-то в поле пароля
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } 
  else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Проверка заглавных букв
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } 
  else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Проверка чисел 
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } 
  else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  // Проверка длины
  var minLength = 6;
  if(myInput.value.length >= minLength) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  }
  else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
  
  

  // проверка на спецсимвол
  
  if(myInput.value.match(/[\!\@#\$\%\^\&\*\(\)\+\=\-\[\]\\\'\;\,\/\{\}\|\"\:\<\>\?\_]/)){
      char.classList.remove("invalid");
      char.classList.add("valid");
  }
  else{
    char.classList.remove("valid");
    char.classList.add("invalid");
  }
  
}

//проверка валидности пароля
function ValidPass(){
  var isLetter = letter.classList.contains("valid");
  var isCapital = capital.classList.contains("valid");
  var isNumber = number.classList.contains("valid");
  var isLength = length.classList.contains("valid");
  var isChar = char.classList.contains("valid");

  var resylt = isLetter && isCapital && isNumber && isLength && isChar;

  return resylt;
}

