const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

const name_ = atob(urlParams.get("name"))
const nameDisplay = document.getElementById("name_display_")
const dateDisplay = document.getElementById("ver_msg_info");
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


