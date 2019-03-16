$(document).ready(function () {

//set wins, losses, HP, attack damage, and counter attack power(defensive power)
    var userHP = Math.floor(Math.random() * 500);
    var opponentHP = Math.floor(Math.random() * 500);
    var attackPower = Math.floor(Math.random() * 300);
    var defensivePower = Math.floor(Math.random() * 100);

 // set images in htmls for each character
    var startButton = $("<button>")
    var userChar1 = $("<img>");
    var userChar2 = $("<img>");
    var userChar3 = $("<img>");
    var userChar4 = $("<img>");
    var userChar5 = $("<img>");
    var enemyChar1 = $("<img>");
    var enemyChar2 = $("<img>");
    var enemyChar3 = $("<img>");
    var enemyChar4 = $("<img>");
    var enemyChar5 = $("<img>");
// set classes for enemy and user character
    $(startButton).addClass("btn btn-warning");
    $(enemyChar1).addClass("enemy1");
    $(enemyChar2).addClass("enemy2");
    $(enemyChar3).addClass("enemy3");
    $(enemyChar4).addClass("enemy4");
    $(enemyChar5).addClass("enemy5");
    $(userChar1).addClass("user1");
    $(userChar2).addClass("user2");
    $(userChar3).addClass("user3");
    $(userChar4).addClass("user4");
    $(userChar5).addClass("user5");

// set attributes for said characters
    $(startButton).attr("type", "button");
    $(userChar1).attr("src", "assets/images/leagueimg1.jpg");
    $(userChar2).attr("src", "assets/images/leagueimg2.jpg");
    $(userChar3).attr("src", "assets/images/leagueimg3.jpg");
    $(userChar4).attr("src", "assets/images/leagueimg4.jpg");
    $(userChar5).attr("src", "assets/images/leagueimg5.jpg");
    $(enemyChar1).attr("src", "assets/images/leagueimg6.jpg");
    $(enemyChar2).attr("src", "assets/images/leagueimg7.jpg");
    $(enemyChar3).attr("src", "assets/images/leagueimg8.jpg");
    $(enemyChar4).attr("src", "assets/images/leagueimg9.jpg");
    $(enemyChar5).attr("src", "assets/images/leagueimg10.jpg");
    $(startButton).text("Start Game");

    function startGame() {
        $(".yourCharacters").prepend(startButton);
        //set click function
        $(startButton).click(function() {
            $(startButton).remove();
            $(".chooseCharacter").text("Choose Your Champion!")
            $(".yourCharacters").append(userChar1);
            $(".yourCharacters").append(userChar2);
            $(".yourCharacters").append(userChar3);
            $(".yourCharacters").append(userChar4);
            $(".yourCharacters").append(userChar5);
        })

        $(userChar1).click(function () {
            $(".chooseEnemy").text("Choose Opponent!")
            $(userChar2).remove();
            $(userChar3).remove();
            $(userChar4).remove();
            $(userChar5).remove();
            $(".enemies").append(enemyChar1);
            $(".enemies").append(enemyChar2);
            $(".enemies").append(enemyChar3);
            $(".enemies").append(enemyChar4);
            $(".enemies").append(enemyChar5);
            $(".yourHP").text("Your HP: " + userHP);
        })

        $(userChar2).click(function () {
            $(".chooseEnemy").text("Choose Opponent!")
            $(userChar1).remove();
            $(userChar3).remove();
            $(userChar4).remove();
            $(userChar5).remove();
            $(".enemies").append(enemyChar1);
            $(".enemies").append(enemyChar2);
            $(".enemies").append(enemyChar3);
            $(".enemies").append(enemyChar4);
            $(".enemies").append(enemyChar5);
            $(".yourHP").text("Your HP: " + userHP);
        })

        $(userChar3).click(function () {
            $(".chooseEnemy").text("Choose Opponent!")
            $(userChar2).remove();
            $(userChar1).remove();
            $(userChar4).remove();
            $(userChar5).remove();
            $(".enemies").append(enemyChar1);
            $(".enemies").append(enemyChar2);
            $(".enemies").append(enemyChar3);
            $(".enemies").append(enemyChar4);
            $(".enemies").append(enemyChar5);
            $(".yourHP").text("Your HP: " + userHP);
        })

        $(userChar4).click(function () {
            $(".chooseEnemy").text("Choose Opponent!")
            $(userChar2).remove();
            $(userChar3).remove();
            $(userChar1).remove();
            $(userChar5).remove();
            $(".enemies").append(enemyChar1);
            $(".enemies").append(enemyChar2);
            $(".enemies").append(enemyChar3);
            $(".enemies").append(enemyChar4);
            $(".enemies").append(enemyChar5);
            $(".yourHP").text("Your HP: " + userHP);
        })

        $(userChar5).click(function () {
            $(".chooseEnemy").text("Choose Opponent!")
            $(userChar2).remove();
            $(userChar3).remove();
            $(userChar4).remove();
            $(userChar1).remove();
            $(".enemies").append(enemyChar1);
            $(".enemies").append(enemyChar2);
            $(".enemies").append(enemyChar3);
            $(".enemies").append(enemyChar4);
            $(".enemies").append(enemyChar5);
            $(".yourHP").text("Your HP: " + userHP);
        })

    }

    startGame();
})