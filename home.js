let logout = document.getElementById('logout-button');

let msg= document.getElementsByClassName('kayde')[0];

logout.addEventListener("click", returnf);

function returnf() {
    window.location.replace("login.html");
}

logout.addEventListener('mouseover',kayde);

function kayde(){
    msg.style.display= "block";
    msg.style.display= "flex";
    
    setTimeout(myGreeting, 1500);

    function myGreeting(){
        msg.style.display= "none";
    }
}