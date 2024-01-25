let onOff = document.querySelector('#onOff');
let theme = document.querySelector('.theme');
let calculator = document.querySelector('.calc');
let spans =document.querySelectorAll('.buttons span');


theme.addEventListener('click', () =>
{
   if(onOff.classList.contains('On'))
   { 
    onOff.classList.remove("On");
    calculator.classList.remove('darkMode');
    onOff.classList.remove('OnButtonColor');
    spans.forEach(function (span)      {
         span.style.backgroundColor = '#fff';
      })
    


   }
   else
   {
    onOff.classList.add('On');
    calculator.classList.add('darkMode');
    onOff.classList.add('OnButtonColor');
    spans.forEach(span =>
      {
         span.style.backgroundColor = '#55555';
      })
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
