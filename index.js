function theDice(){

    // function theDice1(){
    var diceArray= ['images/dice1.png', "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
    var randomGen1= Math.floor(Math.random() * diceArray.length);
    var putDice = diceArray[randomGen1];
    document.querySelector("img").setAttribute("src", putDice);
    // }
    // theDice1();
    
    // function theDice2(){
        var diceArray= ['images/dice1.png', "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
        var randomGen2= Math.floor(Math.random() * diceArray.length);
        var putDice = diceArray[randomGen2];
        document.getElementById("king").setAttribute("src", putDice);
        // }
        // theDice2();
    
        if (randomGen1 > randomGen2){
            document.querySelector("h1").innerHTML= ("🚩Player 1 wins");
        }
        else if (randomGen1 < randomGen2){
            document.querySelector("h1").innerHTML = ("Player 2 wins🚩");
        }
        else{
            document.querySelector("h1").innerHTML = ("Draw");
        }
    
    }

    // window.onload = () => theDice();