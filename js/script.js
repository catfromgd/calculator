function sum(){
    let number1 = Number(document.getElementById('num1').value)
    let number2 = Number(document.getElementById('num2').value)
    let result = number1 + number2
    alert(result)
}

function dif(){
    let number1 = Number(document.getElementById('num1').value)
    let number2 = Number(document.getElementById('num2').value)
    let result = number1 - number2
    alert(result)
}

function mult(){
    let number1 = Number(document.getElementById('num1').value)
    let number2 = Number(document.getElementById('num2').value)
    let result = number1 * number2
    alert(result)
}

function div(){
    let number1 = Number(document.getElementById('num1').value)
    let number2 = Number(document.getElementById('num2').value)
    let result = number1 / number2
    alert(result)
}

function deg(){
    let number1 = Number(document.getElementById('num1').value)
    let number2 = Number(document.getElementById('num2').value)
    let result = number1 * number1
    alert(result)
}

document.addEventListener('keydown', function(e){
    let K = e.key;
    let key = document.querySelector('[data-d='+K+']')
    let audio = document.querySelector('[data-n='+K+']')
    key.classList.add('active');
    setTimeout(()=>{
        key.classList.remove('active');
    }, 100);
    audio.currentTime = 0;
    audio.play();



});