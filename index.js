
var randNum = Math.floor(Math.random() * 100) + 1;
var attempts = 0;

const delay = ms => new Promise(res => setTimeout(res, ms));

console.log(randNum);

function rollDice() {
    const guessNum = Number( document.getElementById('inputNum').value );

	if(isNaN(guessNum)) {
		document.getElementById('resultLabel').textContent = ' *** Please enter a number between 1 - 100 *** ';
	}
	else if(guessNum < randNum) {
		attempts++;
		document.getElementById('resultLabel').textContent = ' Your guess is too low !!! ';
	}
	else if(guessNum > randNum) {
		attempts++;
		document.getElementById('resultLabel').textContent = ' Your guess is too high !!! ';

	}
	else {
		
		document.getElementById('resultLabel').innerHTML = `Correct! The answer was ${randNum}. It took you ${attempts} attempts.`;
		setTimeout(() => { document.getElementById('resultLabel').innerHTML = `You can start new game now.`; }, 2000);
		

		document.getElementById('inputNum').value  = `0`;
		randNum = Math.floor(Math.random() * 100) + 1;
		attempts = 0;
		
		console.log(randNum);
		
	}

}


