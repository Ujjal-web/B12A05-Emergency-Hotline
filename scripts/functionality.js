// .....heart counting ...........

const heartClicker = document.getElementsByClassName('heart-clicker');
const heartCounter = document.getElementById('heart-counter').innerText;
let heartNumber = parseInt(heartCounter);

for (let i = 0; i < heartClicker.length; i++) {
    heartClicker[i].addEventListener('click', function(){
        heartNumber = heartNumber + 1;
        document.getElementById('heart-counter').innerText = heartNumber;
        
    })
};

// ........functionality for call button........................
const coins = document.getElementById('coin').innerText;
let totalCoins = parseInt(coins);
const time = new Date();
const localTime = time.toLocaleTimeString();

const callClicker = document.getElementById('call-btn-1');
callClicker.addEventListener('click', function(){
    if (totalCoins < 20) {
        
        alert("Your balance is less than 20, unable to call");
        return;
    }
    else {
        
        totalCoins = totalCoins - 20;
        document.getElementById('coin').innerText = totalCoins;
        const historyContainer = document.getElementById('history-container');
        const callName = document.getElementById('service-name-1').innerText;
        const callNumber = document.getElementById('service-number-1').innerText;       
        const historyElement = document.createElement('div');
        historyElement.innerHTML = `<div class="calls flex justify-between items-center p-3">
                                        <div>
                                            <h2 class="font-semibold font-inter">${callName}</h2>
                                            <p class="font-hm text-gray-500">${callNumber}</p>
                                        </div>
                                            <p class="font-hm">${localTime}</p>
                                    </div>
                                    ` 
        console.log(historyElement)
        historyContainer.appendChild(historyElement);
        alert("Calling" + " " + callName + " " + callNumber);
        
    }
    
    

});

document.getElementById('call-btn-2').addEventListener('click', function(){
    if (totalCoins < 20) {
        
        alert("Your balance is less than 20, unable to call");
        return;
    }
    else {
        
        totalCoins = totalCoins - 20;
        document.getElementById('coin').innerText = totalCoins;
        const historyContainer = document.getElementById('history-container');
        const callName = document.getElementById('service-name-2').innerText;
        const callNumber = document.getElementById('service-number-2').innerText;       
        const historyElement = document.createElement('div');
        historyElement.innerHTML = `<div class="calls flex justify-between items-center p-3">
                                        <div>
                                            <h2 class="font-semibold font-inter">${callName}</h2>
                                            <p class="font-hm text-gray-500">${callNumber}</p>
                                        </div>
                                            <p class="font-hm">${localTime}</p>
                                    </div>
                                    ` 
        console.log(historyElement)
        historyContainer.appendChild(historyElement);
        alert("Calling" + " " + callName + " " + callNumber);
        
    }
    
    

});

document.getElementById('call-btn-3').addEventListener('click', function(){
    if (totalCoins < 20) {
        
        alert("Your balance is less than 20, unable to call");
        return;
    }
    else {
        
        totalCoins = totalCoins - 20;
        document.getElementById('coin').innerText = totalCoins;
        const historyContainer = document.getElementById('history-container');
        const callName = document.getElementById('service-name-3').innerText;
        const callNumber = document.getElementById('service-number-3').innerText;       
        const historyElement = document.createElement('div');
        historyElement.innerHTML = `<div class="calls flex justify-between items-center p-3">
                                        <div>
                                            <h2 class="font-semibold font-inter">${callName}</h2>
                                            <p class="font-hm text-gray-500">${callNumber}</p>
                                        </div>
                                            <p class="font-hm">${localTime}</p>
                                    </div>
                                    ` 
        console.log(historyElement)
        historyContainer.appendChild(historyElement);
        alert("Calling" + " " + callName + " " + callNumber);
        
    }
});

document.getElementById('call-btn-4').addEventListener('click', function(){
    if (totalCoins < 20) {
        
        alert("Your balance is less than 20, unable to call");
        return;
    }
    else {
        
        totalCoins = totalCoins - 20;
        document.getElementById('coin').innerText = totalCoins;
        const historyContainer = document.getElementById('history-container');
        const callName = document.getElementById('service-name-4').innerText;
        const callNumber = document.getElementById('service-number-4').innerText;       
        const historyElement = document.createElement('div');
        historyElement.innerHTML = `<div class="calls flex justify-between items-center p-3">
                                        <div>
                                            <h2 class="font-semibold font-inter">${callName}</h2>
                                            <p class="font-hm text-gray-500">${callNumber}</p>
                                        </div>
                                            <p class="font-hm">${localTime}</p>
                                    </div>
                                    ` 
        console.log(historyElement)
        historyContainer.appendChild(historyElement);
        alert("Calling" + " " + callName + " " + callNumber);
        
    }
});


document.getElementById('call-btn-5').addEventListener('click', function(){
    if (totalCoins < 20) {
        
        alert("Your balance is less than 20, unable to call");
        return;
    }
    else {
        
        totalCoins = totalCoins - 20;
        document.getElementById('coin').innerText = totalCoins;
        const historyContainer = document.getElementById('history-container');
        const callName = document.getElementById('service-name-5').innerText;
        const callNumber = document.getElementById('service-number-5').innerText;       
        const historyElement = document.createElement('div');
        historyElement.innerHTML = `<div class="calls flex justify-between items-center p-3">
                                        <div>
                                            <h2 class="font-semibold font-inter">${callName}</h2>
                                            <p class="font-hm text-gray-500">${callNumber}</p>
                                        </div>
                                            <p class="font-hm">${localTime}</p>
                                    </div>
                                    ` 
        console.log(historyElement)
        historyContainer.appendChild(historyElement);
        alert("Calling" + " " + callName + " " + callNumber);
        
    }
});


document.getElementById('call-btn-6').addEventListener('click', function(){
    if (totalCoins < 20) {
        
        alert("Your balance is less than 20, unable to call");
        return;
    }
    else {
        
        totalCoins = totalCoins - 20;
        document.getElementById('coin').innerText = totalCoins;
        const historyContainer = document.getElementById('history-container');
        const callName = document.getElementById('service-name-6').innerText;
        const callNumber = document.getElementById('service-number-6').innerText;       
        const historyElement = document.createElement('div');
        historyElement.innerHTML = `<div class="calls flex justify-between items-center p-3">
                                        <div>
                                            <h2 class="font-semibold font-inter">${callName}</h2>
                                            <p class="font-hm text-gray-500">${callNumber}</p>
                                        </div>
                                            <p class="font-hm">${localTime}</p>
                                    </div>
                                    ` 
        console.log(historyElement)
        historyContainer.appendChild(historyElement);
        alert("Calling" + " " + callName + " " + callNumber);
        
    }
});





