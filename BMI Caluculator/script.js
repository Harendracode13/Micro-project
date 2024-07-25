const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    const show=document.querySelectorAll('.show');
    if(bmi<18.6)
    {
        show[0].style.background="green";
        show[1].style.background="hsl(60, 0%, 47%)";
        show[2].style.background="hsl(60, 0%, 47%)";
    }
    else if(24.9<bmi){
        show[2].style.background="green";
        show[1].style.background="hsl(60, 0%, 47%)";
        show[0].style.background="hsl(60, 0%, 47%)";
    }
    else if(18.6<bmi<24.9){
        show[1].style.background="green";
        show[0].style.background="hsl(60, 0%, 47%)";
        show[2].style.background="hsl(60, 0%, 47%)";
    }
   
    else{

    }
    
  }

});

