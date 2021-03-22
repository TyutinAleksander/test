//проверка E-mail

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const INPUT = document.querySelector('input');
var emailValid = false;

function validateEmail(value) {
  return EMAIL_REGEXP.test(value);
}

function updateInput() {
	if (validateEmail(INPUT.value)){
		 INPUT.style.borderColor = 'green';
		 emailValid = true;
	}
	else{
		 INPUT.style.borderColor = 'red';
		 emailValid = false;
	}
}

INPUT.addEventListener('input', updateInput);