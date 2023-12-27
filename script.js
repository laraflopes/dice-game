

if (!sessionStorage.getItem("rollDice")) {
    sessionStorage.setItem("rollDice", "extra")
 
  } else(
    rollTheDice()
  )


function rollTheDice () {

    function randomNumberGenerator() {

        var n = Math.random();
        return (Math.floor(n*6) + 1);
    }
     
    var player1Number = randomNumberGenerator();
    var player2Number = randomNumberGenerator();
    
    function changeSrcName(playerRandomNumber) {
    
        return `./images/dice${playerRandomNumber}.png`;
    }
    
    
    var player1Src = changeSrcName(player1Number);
    var player2Src = changeSrcName(player2Number);
    
    
    function changeSrcAttribute(selector, srcText) {
    
        document.querySelector(selector).setAttribute("src", srcText);
    }
    
    
    changeSrcAttribute(".img1", player1Src)
    changeSrcAttribute(".img2", player2Src)
    
    function declareWinner(player1Score, player2Score) {
    
        var title = document.querySelector("h1");
      
        if (player1Score > player2Score) {
          title.textContent = "🚩Player 1 Wins!";
        } else if (player1Score < player2Score) {
          title.textContent = "🚩Player 2 Wins!";
        } else {
          title.textContent = "It's a Tie! ";
        }
      }
    
      declareWinner(player1Number, player2Number);
    

}


  
