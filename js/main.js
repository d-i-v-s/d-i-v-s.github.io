var firstsec = document.getElementById('main');
var secondsec = document.getElementById('who');
var thirdsec = document.getElementById('contact')
document.getElementById('scroll1').addEventListener("click", scrollToWho);
document.getElementById('scroll2').addEventListener("click", scrollToContact);
function scrollToWho() {
     secondsec.scrollIntoView({behavior: "smooth"});
}
function scrollToContact(){
    thirdsec.scrollIntoView({behavior: "smooth"});
}
