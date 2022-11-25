// Importing all the inputs
const numberOne = document.querySelector('.inputOne');
const numberTwo = document.querySelector('.inputTwo');
const numberThree = document.querySelector('.inputThree');
const termNumber = document.getElementById('inputTerm');
const answer = document.getElementById('answer');

// Importing all the buttons
const calBtn = document.getElementById('calculate');

// Calculation
calBtn.addEventListener('click', () => {
    let termsArray = [numberOne.value, numberTwo.value, numberThree.value,];
    const a = termsArray[0];
    const r = [termsArray[1] / termsArray[0], termsArray[2] / termsArray[1]];

    if (r[0] == r[1]) {
        let nTerm = a*r[0]**(termNumber.value - 1);
        answer.value = nTerm;
    } else {
        answer.value = 'Input a valid Geometric Progression';
    }
});