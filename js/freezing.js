let timeText = document.getElementById("time_freezing");
let btn_freezing = document.getElementById("btn_freezing");
let back = document.getElementById("btn_back")

let time = 30

timeText.innerHTML = time

function timer () {

    if(time == 0){

        timeText.innerHTML = "Режим суперзаморажування закінчено. Режим вимкнено"    
    
    }
    else{
    
        time--;
        timeText.innerHTML = time
        
        
    
    
    }



}

btn_freezing.onclick = function(){

   
    setInterval(timer,1000)

}



back.onclick = function(){

    window.location = "./index.html"

}
