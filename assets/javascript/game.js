// $(document).ready(function () {

//set wins, losses, HP, attack damage, and counter attack power(defensive power)
var userHP = Math.floor(Math.random() * 500 + 100);
var userAttackPower = Math.floor(Math.random() * 200 + 50);
var wins = 0;
var enemyChosen = false;
var characters = [players.char1, players.char2, players.char3, players.char4, players.char5, players.char6, players.char7, players.char8, players.char9, players.char10];

// set images in htmls for each character
var atkButton = $("<button>");
var startButton = $("<button>");
// set classes for enemy and user character
$(atkButton).addClass("btn btn-danger");
$(startButton).addClass("btn btn-warning");

// set attributes for said characters
$(atkButton).attr("type", "button");
$(startButton).attr("type", "button");
$(startButton).text("Start Game");
$(atkButton).text("ATTACK!");

// SET OBJECT UP TO HOLD ALL THE CHARACTERS YOU CAN BE IN THE GAME AND EACH CHARACTER HOLDS THEIR OWN HP AND ATTACK POWER

var players = {
        char1: {

        },

        char2: {

        },

        char3: {

        },

        char4: {

        },

        char5: {

        },

        char6: {

        },

        char7: {

        },

        char8: {

        },

        char9: {

        },

        char10: {

        }
}




function startGame() {
    $(".yourCharacters").prepend(startButton);
    //set click function
    $(startButton).click(function () {
        $(startButton).remove();
        $(".chooseCharacter").text("Choose Your Champion!")
    })

    $(atkButton).click(function () {
        $(".enemyHP").text("Enemy HP: " + opponentHP);
        $(".yourHP").text("Your HP: " + userHP);

        if (yourHP <= 0) {
            alert("You have lost the Game!")
            resetGame();
        } else if (wins === 5) {
            alert("You have won!");
            resetGame();
        } else if (opponentHP <= 0) {
            chooseNewOpponent();
            wins++;
        }
    })


    var resetGame = () => {
        
        $(".enemyHP").text("");
        $(".yourHP").text("");
        $(".chooseCharacter").text("");
        $(".chooseEnemy").text("");
        $(".attack").text("");
        $(atkButton).remove();
        var characters = [players.char1, players.char2, players.char3, players.char4, players.char5, players.char6, players.char7, players.char8, players.char9, players.char10];
        wins = 0;
        userHP = Math.floor(Math.random() * 500);
        userAttackPower = Math.floor(Math.random() * 101);
        startGame();
    }


}
var chooseNewOpponent = () => {
    $('.enemyHP').text('');
    opponentHP = Math.floor(Math.random() * 250);
    enemyAttackPower = Math.floor(Math.random() * 101);
    userAttackPower += Math.floor(Math.random() * 50);

    //  LOOP THROUGH ARRAY 
    // IF  
    // 
    // ELSE 


    if (enemyChosen) {
        var index = unclickedEnemies.indexOf(enemyChar1);
        unclickedEnemies.slice(index, index + 1);
        console.log(unclickedEnemies);
        for (let i = 0; i < unclickedEnemies.length; i++) {
            $('.enemies').append(unclickedEnemies[i]);   
        }
    } 
}

startGame();


// })