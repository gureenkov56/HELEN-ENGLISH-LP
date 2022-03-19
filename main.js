document.addEventListener('DOMContentLoaded', () => {
	const roundedText = document.getElementById('roundedText');
	let strForRound = "ENGLISH BY HELEN ONLINE ENGLISH BY HELEN ONLINE ENGLISH BY HELEN ";

	for (let i = 0; i < strForRound.length; i++) {
		const letter = strForRound[i];
		console.log(letter);
		let newSpan = document.createElement('span');
		newSpan.innerHTML = letter;
		roundedText.appendChild(newSpan);
	}


	const letter = document.querySelectorAll('.rounded_text > span');
	let currentDeg = 0;
	let deg = 360 / letter.length;

	// for create
	setTransformRotateForLetter();

	// for first animation
	setTimeout(() => {
		setTransformRotateForLetter();
	}, 0);

	// for repeat animation
	setInterval(() => {
		setTransformRotateForLetter();
	}, 35000);



	function setTransformRotateForLetter() {
		letter.forEach(el => {
			el.style.transform = `rotate(${currentDeg}deg)`;
			currentDeg += deg;
		})
	}
})