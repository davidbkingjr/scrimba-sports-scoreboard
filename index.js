 let homeNum = 0
 let awayNum = 0 
 let homeScore = document.getElementById("home-el") 
 let awayScore = document.getElementById("away-el")
 
// Home Score
 function addOneHome() {
     homeNum += 1
     homeScore.textContent = homeNum
 }
 
 function addTwoHome() {
     homeNum += 2
     homeScore.textContent = homeNum
 }
 
 function addThreeHome() {
     homeNum += 3
     homeScore.textContent = homeNum
 }
 
 // Away Score 
  function addOneAway() {
     awayNum += 1
     awayScore.textContent = awayNum
 }
 
 function addTwoAway() {
     awayNum += 2
     awayScore.textContent = awayNum
 }
 
 function addThreeAway() {
     awayNum += 3
     awayScore.textContent = awayNum
 }
 
 // New Game
 
 function newGame() {
     homeNum = 0
     awayNum = 0
     homeScore.textContent = 0
     awayScore.textContent = 0
 }