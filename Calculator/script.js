let input=document.getElementById('inputbox');
let buttons=document.querySelectorAll('button');

let output="";
let arr=Array.from(buttons);

arr.forEach(button =>{
    button.addEventListener('click' ,(e)=>{
        if(e.target.innerHTML == '=')
        {
            output =eval(output);
            input.value=output;
        }
        else if(e.target.innerHTML == 'AC')
        {
            output="";
            input.value=output;
        }
        else if(e.target.innerHTML =='DEL')
        {
            output=output.substring(0,output.length-1);
            input.value=output;
        }
        else{
            output += e.target.innerHTML;
            input.value=output;
        }
        
    })
} )

