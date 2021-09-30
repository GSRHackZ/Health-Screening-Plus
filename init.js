const gen_ = document.getElementById("gen_");
const nom = document.getElementById("nom");
const splash = document.getElementsByClassName("splash")[0];
const body = document.body;
const html = document.getElementsByTagName("html")[0]

gen_.addEventListener("click",function(){
    if(nom.value.trim().length>0){
        window.open(`screening_gen.html?name=${btoa(nom.value)}`)
    }
})


function start(wait){
    setTimeout(function(){
        splash.classList.remove("fade");
        splash.classList.add("fadeout");
        body.classList.add("fade");
        body.classList.remove("lock");
        html.classList.remove("lock");
        splash.remove();
    },wait)
}

start(250)
