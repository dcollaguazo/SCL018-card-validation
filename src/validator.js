const validator = {
  isValid: (creditCardNumber) => {
    let arrForLoom = creditCardNumber.split("").reverse();

    arrForLoom = arrForLoom.map(Number);

    for (let i = 1; i < arrForLoom.length; i += 2) {
      // take every second element and multiply it by 2
      arrForLoom[i] = arrForLoom[i] * 2;

      if (arrForLoom[i] >= 10) {
        arrForLoom[i] = arrForLoom[i]
          .toString()
          .split("")
          .map(Number)
          .reduce(function (a, b) {
            return a + b;
          }, 0);
      }
    }
    let sum = arrForLoom.reduce(function (a, b) {
      return a + b;
    }, 0);

    const result = sum % 10;

    if (result === 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify: (creditCardNumber) => {
    creditCardNumber = creditCardNumber.replace(/\w(?=\w{4})/g, "#");
    return creditCardNumber;

  },
};

export default validator;
