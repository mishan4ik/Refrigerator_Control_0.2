let degreesInfo = document.getElementById("degrees");
let addTemp = document.querySelector(".block_plus")
let minTemp = document.querySelector(".block_minus")
let back = document.getElementById("btn_back");
let degree = 2;
degreesInfo.innerHTML = degree


addTemp.onclick = function(){

    degree++;
    degreesInfo.innerHTML = degree;
    localStorage.setItem("degree",degree)


}

minTemp.onclick = function(){

    degree--
    degreesInfo.innerHTML = degree
    localStorage.setItem("degree",degree)

}
back.onclick = function(){

    window.location = "./index.html"

}


