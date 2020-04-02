const screen = document.querySelector('.screen');

const update = (number) => {
	screen.value = number;
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) =>{
		number.addEventListener("click", (event) => {
			input(event.target.value)
			update(currIp);
		})
	}

)

let prevIp = '0';
let caloperator = '';
let currIp = '0';

const input = (number) => {
	if(currIp=='0'){
		currIp =number;
	}
	else{
		currIp += number;
	}
}

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputop(event.target.value);
	})
})

const inputop = (operator) =>{
	prevIp = currIp;
	caloperator = operator;
	currIp = '0';
}

const equal = document.querySelector('.equals-to');

equal.addEventListener('click',() => {
	calculate();
	update(currIp);
})

const calculate = () => {
	let result = 0;
	switch(caloperator){
		case '+':
		result = parseInt(prevIp) + parseInt(currIp);
		break;
		case '-':
		result = parseInt(prevIp) - parseInt(currIp);
		break;
		case '*':
		result = parseInt(prevIp) * parseInt(currIp);
		break;
		case '/':
		result = parseInt(prevIp) / parseInt(currIp);
		break;
		default:
		return ;
	}
	currIp = result.toString();
	caloperator ='';
}