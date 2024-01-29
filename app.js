let onOff = document.querySelector('#onOff');
let theme = document.querySelector('.theme');
let calculator = document.querySelector('.calc');
let spans =document.querySelectorAll('.buttons span');
let clear = document.querySelector('#Clear');
let del = document.querySelector('#del');
let equalsTo = document.querySelector('#equalsTo');
let h1 = document.querySelector('h1');


theme.addEventListener('click', () =>
{
   if(onOff.classList.contains('On'))
   { 
    onOff.classList.remove("On");
    calculator.classList.remove('darkMode');
    onOff.classList.remove('OnButtonColor');
    spans.forEach(function (span)      {
      span.style.backgroundColor = '#fff';
      span.style.color = '#000';
      span.style.borderRadius = '0.7rem';
   })
   clear.style.backgroundColor = 'red';
   del.style.backgroundColor = 'red';
   equalsTo.style.backgroundColor = '#25db72';
   h1.style.color = '#FFFF00';
   }
   else
   {
    onOff.classList.add('On');
    calculator.classList.add('darkMode');
    onOff.classList.add('OnButtonColor');
    spans.forEach(function (span)      {
      span.style.backgroundColor = '#555555';
      span.style.color = '#fff';
      span.style.borderRadius = '1rem';
   })
   clear.style.backgroundColor = 'red';
   del.style.backgroundColor = 'red';
   equalsTo.style.backgroundColor = '#25db72';
   h1.style.color = '#fff';
   }

   
})


// Now adding the functionalities of the numbers & functions:


let input = document.querySelector('input');
let valueOfInput = input.value;


const functions = ['%', 'X', '-', '+', '=', '/', '.', 'CE', 'C'];

spans.forEach(span =>
   span.addEventListener('click', ()=>
   
      {
         if(valueOfInput == '')
         {
            if (!functions.includes(span.innerText)) {
               valueOfInput = valueOfInput + span.innerText;
               input.value = valueOfInput;
             }          
         }
         else if(span.innerText == 'C')
         {
            valueOfInput = '';
            input.value = valueOfInput;
         }
         else if(span.innerText == 'CE')
         {
            valueOfInput = valueOfInput.slice(0,valueOfInput.length-1);
            input.value = valueOfInput;
         }
         else if(span.innerText == 'X'  )
         {
            valueOfInput = valueOfInput + '*';
            input.value = valueOfInput;
         }
         else if(span.innerText != '='  )
         {
            valueOfInput = valueOfInput + span.innerText;
            input.value = valueOfInput;
         }
         else if (span.innerText == '=')
         {
            let result = eval(valueOfInput);
            let finalResult = parseFloat(result.toFixed(4));
            if(finalResult == 'Infinity')
            {
               valueOfInput = finalResult;
               input.value = '∞';
            }
            else
            {
               input.value = finalResult;
               valueOfInput = input.value;
            }
         }
         
        
      }

   )
   )
