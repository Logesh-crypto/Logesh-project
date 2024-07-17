
let outputscreen=document.getElementById("getouptut");

function display(num){
getoutput.value+=num;
}

function equal(){
try{
getoutput.value=eval(getoutput.value);
}
catch(err)
{
alert("invalid operation")
}
}
function clear_input()
{
getoutput.value=" ";
}

    
