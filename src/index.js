import validator from './validator.js';

let creditCardNumber = document.getElementById('creditCardNumber');

document.getElementById("btnValidate").addEventListener("click", () => {
    const valid = validator.isValid(creditCardNumber.value);
    let masked = '';
    if (valid){
        alert('Your card is valid!');
        masked = validator.maskify(creditCardNumber.value);
    }else{
        alert('Please enter a valid credit card');
    }
    console.log(masked);
});
