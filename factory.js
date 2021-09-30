const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
const name_ = atob(urlParams.get("name"))
const nameDisplay = document.getElementById("name_display_")
const dateDisplay = document.getElementById("ver_msg_info");
const _status = document.getElementById("_status")
let date_ = `${days[time("kronos").getDay()]}, ${monthNames[time("kronos").getMonth()]} ${time("kronos").getDate()}, ${time("kronos").getFullYear()} ${time("a")}`;
nameDisplay.innerText=name_;
dateDisplay.innerText = date_;

function time(mode){
    let kronos=new Date();
    let a=new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    let b=a.slice(0,4);
    if(mode=="a"){
        return a;
    }
    else if(mode=="b"){
        return b;
    }
    else if(mode=="kronos"){
        return kronos;
    }
}

if(localStorage.getItem("stat")!==null){
    let savedStat = localStorage.getItem("stat");
    if(savedStat=="guest"){
        _status.setAttribute("stat","student");
    }
    else if(savedStat=="student"){
        _status.setAttribute("stat","guest");
    }
    setTimeout(function(){_status.click();},10)
}

_status.addEventListener("click",function(){
    if(this.getAttribute("stat")=="guest"){
        this.setAttribute("stat","student");
        this.innerText="STUDENT";
        this.style.background="#ff8d1c";
        this.parentElement.style="background:#173f5f;color:white;transition:.6s;";
    }
    else if(this.getAttribute("stat")=="student"){
        this.setAttribute("stat","guest");
        this.innerText="GUEST";
        this.style.background="#617689";
        this.parentElement.style="background:white;color:black;transition:.6s;";
    }
    localStorage.setItem("stat",this.getAttribute("stat"))
})
