

function readValues(){
  x=document.getElementById('num1').value;
  y=document.getElementById('num2').value;
}

function setResult(result){
  document.getElementById('result').innerHTML = result;
}

function sum() {
  readValues();
	
  z=parseInt(x)+parseInt(y);
  setResult(z);
}

function sub() {
  readValues();

  z=parseInt(x)-parseInt(y);
  setResult(z);
}

function devide() {
  readValues();

  z=parseInt(x)/parseInt(y);
  setResult(z);
}
	
function mul() {
  readValues();

  z=parseInt(x)*parseInt(y);
  setResult(z);
}	


function factorial(num){
  num = parseInt(num);
  
  if(num > 1)
    return factorial(num-1) * num ;        
  else
    return num;
}


