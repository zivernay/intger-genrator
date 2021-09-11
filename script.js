const divContainer = document.querySelector('.integer-output');
const btn = document.querySelector('button');
divContainer.innerHTML = "";
btn.onclick = function() {
  const input = document.querySelector('#limit');
  const num = +input.value;
  input.focus();
  let i = 1;
  while (i <= num ){ //inclusive range [1,num]
    let result = isPrime(i);
    if (result){
      outputInSpan(result);
    }
    i++;
  }
}

function outputInSpan(content){
  const spanElement = document.createElement('span');
  const text = document.createTextNode(content);
  spanElement.appendChild(text);
  divContainer.appendChild(spanElement);
}

function isPrime(num){
  let divisorCount = 0
  for (let j = 1; j <= num; j++){
    if ( num % j === 0 ) { divisorCount += 1 }
  }
  return (divisorCount > 2) ? 0: num
}
