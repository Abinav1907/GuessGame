var a = Math.random();
var b = Math.floor(a*100)+1;
var y = document.getElementById("p1");
var x = document.getElementById("guessnum");
var win1 = document.getElementById("win1");
var win2 = document.getElementById("win2");
var loss = document.getElementById("loss");
var count = 0;
function answer(){
  var num = x.value;
  if(num==b){
    alert("Congratulations! You won!!!");

    win2.play();
    confetti({
      particleCount: 1000,
      spread: 500,
      origin: { y: 0.6 }
    });
    
    y.textContent = "You are right! 🥳🎉";
    win1.play();
    
  }
  else{
    count = count+1;
    if(count==10){
      y.textContent = "Oops... You've reached the maximum attempts 🥲🙃"
      loss.play();
    }
    else if(num>b){
      y.textContent = "Guessed number is higher than the number to Guess...🫠";
      
    }
    else if(num<b){
      y.textContent = "Guessed number is lower than the number to Guess...🙃";
      
      
    }
    


  }
  
}