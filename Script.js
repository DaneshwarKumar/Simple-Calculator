 
function cal(){
    
let opr1 = document.getElementById('first').value;
let opr2 = document.getElementById('second').value;
let operator = document.getElementById('operator').value;
var res;
 
if(operator == '+')
{
    res = parseInt(opr1) + parseInt(opr2);
}
else if(operator == '-'){
    res = parseInt(opr1) - parseInt(opr2);
}
else if(operator == 'X')
{
    res = parseInt(opr1) * parseInt(opr2);
}
else if(operator == '/'){
    res = parseInt(opr1) / parseInt(opr2);
}
else if(operator == '%'){
    res = parseInt(opr1) % parseInt(opr2);
}
else{
     alert( "Please Enter the Number and select the Operator");
}

document.getElementById('res').value = res;


}