var h1Id=document.getElementById('h1');
var buttonId=document.getElementById('buttonclick');
var counter=localStorage.getItem('counter') ?? 0;
h1Id.textContent = 'Dian Coin у тебя: ' + counter;

buttonId.addEventListener('click', function(){
    counter++;
    h1Id.textContent='Dian Coin у тебя: '+counter;
    localStorage.setItem('counter', counter);
});