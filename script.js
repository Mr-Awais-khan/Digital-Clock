let clock = document.querySelector('#clock');

function time (){
    clock.innerHTML = new Date().toLocaleTimeString();
}
setInterval(time ,1000);
