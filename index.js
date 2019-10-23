//dots navigation

function navi(x)
{
    document.getElementById(x).scrollIntoView();
}

//dots light

let sp = 0;
let sh = 0

setInterval(function(){

    sp = window.scrollY;
    sh = document.body.scrollHeight;

    if (sp <= sh*0)
        lightDot("1")
    else if (sp > sh*0 && sp <= sh*0.25)
        lightDot("2")
    else if (sp > sh*0.25 && sp <= sh*0.5)
        lightDot("3")
    else if (sp > sh*0.5 && sp <= sh*0.75)
        lightDot("4")
    else if (sp > sh*0.75 && sp <= sh)
        lightDot("5")
},1);

function lightDot(x)
{
    for (let i=1;i<=5;i++)
    {
        document.querySelector("#dot" + i).style.color = "rgb(200, 200, 200";
    }
    document.querySelector("#dot" + x).style.color = "rgb(200, 15, 15)";
}

document.querySelector("#bars").addEventListener("click", function(){
    mobileMenu();
});

let barsActive = false;

function mobileMenu()
{
    if (!barsActive)
    {    
        document.querySelector("topnav").style.display = "block";
        barsActive = true;
        document.querySelector("#bars").style.color = "rgb(200, 15, 15)";
    }
    else if (barsActive == true)
    {
        document.querySelector("topnav").style.display = "none";
        barsActive = false;
        document.querySelector("#bars").style.color = "rgb(200, 200, 200)";
    }
}

console.log()
