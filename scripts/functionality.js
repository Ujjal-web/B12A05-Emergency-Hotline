// .....hear counting ...........

const heartClicker = document.getElementsByClassName('heart-clicker');
const heartCounter = document.getElementById('heart-counter').innerText;
let heartNumber = Number(heartCounter);

for (let i = 0; i < heartClicker.length; i++) {
    heartClicker[i].addEventListener('click', function(){
        heartNumber = heartNumber + 1;
        document.getElementById('heart-counter').innerText = heartNumber;
        
    })
}
