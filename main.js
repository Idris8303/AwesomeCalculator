let container = document.querySelector('.container');
let display = document.querySelector('#display');
  console.log(container);

container.addEventListener('click', function(evt) {
  console.log(evt.target.innerText);

  let pressedButtonText = evt.target.innerText;
  if(pressedButtonText === '0' || Number(pressedButtonText)){
    display.textContent += pressedButtonText;

  } else {
    if(pressedButtonText === 'C'){
      display.textContent = '';
    }else if(pressedButtonText !== '='){
      display.textContent += ' ' + pressedButtonText + ' ';

    }else if(pressedButtonText === '='){

      let equation = display.textContent.split(' ');
      let lhs = Number(equation[0]);
      let operator = equation[1];
      let rhs = Number(equation[2]);
      if (operator === '+'){
          display.textContent = lhs + rhs;
      }else if(operator === '-'){
        display.textContent = lhs - rhs;
      }else if(operator === 'x'){
          display.textContent = lhs * rhs;
      }else {
        display.textContent = lhs / rhs;
      }
    }

  }

});
