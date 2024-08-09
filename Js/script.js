function validateNumber() {
    const input = document.getElementById('numberInput');
    const result = document.getElementById('result');
    const number = parseInt(input.value, 10);

    
    if (isNaN(number)) {
        result.textContent = '';
        return;
    }
    if (number < 0) {
        result.textContent = 'Enter a positive value';
    } else if (number % 2 === 0) {
        result.innerHTML = number+2+','+(number+4)+','+(number+6);
    } else {
        result.innerHTML = number+2+','+(number+4)+','+(number+6);
    }
}