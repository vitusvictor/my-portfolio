    window.onload = ()=>{
    animation();
};

// window.addEventListener("load", ()=>{
//     animation;});

var i = 0;
var dummy = "Hi! I'm Somto. I create stuff using Javascript, Java and Python."
var show = "";

function anime(){
    if(i<dummy.length){
        show = show + dummy[i];
        var inner = document.getElementById("text").innerHTML = show;
        i++;
        id = setTimeout(anime, 120);
    }
}

function timePassed(){
    show = "";
    i = 0;
    anime();
}

function animation(){
    setTimeout(anime, 2000);
    setInterval(timePassed, 13000);
}


let theme = localStorage.getItem("theme");

if (theme == null){
    setTheme("green");
}else{
    setTheme(theme);
}


let themeDots = document.getElementsByClassName("theme-dot");
for (var i = 0; themeDots.length>i; i++){
    themeDots[i].addEventListener("click", function(){
        console.log(i);
        // console.log(themeDots.length);
        let mode = this.dataset.mode;
        console.log(mode)
        setTheme(mode);
    })
}

function setTheme(mode){
    if(mode=="white"){
        document.getElementById("theme-style").href = "whitish.css";
    }
    if(mode=="green"){
        document.getElementById("theme-style").href = "style.css";
    
    }
    if(mode=="orange"){
        document.getElementById("theme-style").href = "orange.css";
    }

    localStorage.setItem("theme", mode);
}


function openNav(){
    var closeIcon = document.querySelector("#close-icon-container");
    closeIcon.style.width="100%";
}

function closeNav(){
    document.querySelector("#close-icon-container").style.width="0px";
    var variable = "open";
}

