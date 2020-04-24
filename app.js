const outPut = document.querySelector('#outPut');
const selectValue = document.getElementById('selectValue')
const switchNbr = document.querySelector('#number input');
const switchSymbol = document.querySelector('#symbol input');
const button = document.querySelector('.btn');
const clipboard = document.querySelector('.clipboard');
// outPut.textContent = "EzRTdS85!KihbLM";


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// Copy to the clipboard
clipboard.addEventListener('click', ()=>{
    const textarea = document.createElement('textarea');
    const password = outPut.innerText;

    if(!password){
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
     
})


button.addEventListener('click', () => {
    const length = +selectValue.value;
    const hasNumber = switchNbr.checked;
    const hasSymbol = switchSymbol.checked;
    const hasLower = true;
    const hasUpper = true;

    outPut.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// Générate password fonction
function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}
	
	// create a loop
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}


// Generator functions http://www.net-comber.com/charset.html

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26)+97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26)+65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10)+48);
}

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

//console.log(getRandomSymbol());

