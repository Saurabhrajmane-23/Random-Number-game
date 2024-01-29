let randomNumber = Math.floor(Math.random()*100 +1);
console.log(randomNumber);
// let guess = prompt("Guess the number: ");
let guesses=0;
for(let i=0;i<100;i++){
  guesses++;

  let guess = prompt("Guess the number: ");  
  guess1 = parseInt(guess);
  console.log(guess1);
  if(guess1 === randomNumber){
    let score = 100-guesses;
    alert("This is the right number & your score is: " + score);
    break;
  }
  else if(guess1 > randomNumber){
    alert("Your guess is bigger than the number");
  }
  else if(guess1 < randomNumber){
    alert("Your guess is less than the number");
  }
}