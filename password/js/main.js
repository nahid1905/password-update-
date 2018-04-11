// DATE CODE

function clock() {
	var time = new Date(),
    
	hours = time.getHours(),
    
    minutes = time.getMinutes();
    

	document.querySelectorAll('.clock')[0].innerHTML = qur(hours) + ":" + qur(minutes);
  
  	function qur(saat) {
    if (saat < 10) {
      saat = '0' + saat
    }
    return saat;
  }
}
setInterval(clock, 1000);

// END OF DATE CODE

var first = document.querySelector(".first");
var timer = document.querySelector(".date");
var passwordDiv = document.querySelector(".password");
var password = document.querySelector("#inputPassword3")
var icon = document.querySelector(".fa-sign-in-alt");
var second = document.querySelector(".second");

first.addEventListener("click", function(){
  timer.style.display= "none";
  passwordDiv.style.display= "block";
}); 

icon.addEventListener("click", function(){
  if(password.value=="salam"){
    first.style.display="none";
    second.style.display="block";
  }
  else{
    alert("Yalnis Parol")
  }
})

