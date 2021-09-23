const gen_ = document.getElementById("gen_");
const nom = document.getElementById("nom");

gen_.addEventListener("click",function(){
    if(nom.value.trim().length>0){
        window.open(`screening_gen.html?name=${btoa(nom.value)}`)
    }
})
