var btn=document.getElementsByClassName("button");
var display=document.getElementById("display");
var exp1=0;
var exp2=null;
var operator=null;
for(var i=0;i<btn.length;i++)
{
    btn[i].addEventListener('click',function(){
        var val = this.getAttribute('data-value');
        if(val == '+'){
            operator='+';
            exp1=parseFloat(display.textContent);
            display.innerHTML="";
        }
        else if(val == '=' && operator=='+'){
            exp2=parseFloat(display.textContent);
            display.innerHTML=exp1+exp2;
        }
        else if(val == '-'){
            operator='-';
            exp1=parseFloat(display.textContent);
            display.innerHTML="";
        }
        else if(val == '=' && operator=='-'){
            exp2=parseFloat(display.textContent);
            display.innerHTML=exp1-exp2;
        }
        else if(val == '*'){
            operator='*';
            exp1=parseFloat(display.textContent);
            display.innerHTML="";
        }
        else if(val == '=' && operator=='*'){
            exp2=parseFloat(display.textContent);
            display.innerHTML=exp1*exp2;
        }
        else if(val == '/'){
            operator='/';
            exp1=parseFloat(display.textContent);
            display.innerHTML="";
        }
        else if(val == '=' && operator=='/'){
            exp2=parseFloat(display.textContent);
            if(exp2!=0){
            display.innerHTML=exp1/exp2;}
            else
            {
                display.innerHTML="error";
            }
        }
        else if(val == '%'){
            operator='%';
            exp1=parseFloat(display.textContent);
            display.innerHTML=exp1/100;
        }
        else if(val == '+/-'){
            operator='+/-';
            exp1=parseFloat(display.textContent);
            display.innerHTML=-exp1;
        }
        else if(val=='AC')
        {
            display.innerHTML="";
        }
        else{
            display.innerText += val;
        }
    });
}