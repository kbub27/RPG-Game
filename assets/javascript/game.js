$(document).ready(function () {

//set wins, losses, HP, attack damage, and counter attack power(defensive power)
    var wins = 0;
    var losses = 0;
    var userHP = Math.floor(Math.random() * 500);
    var opponentHP = Math.floor(Math.random() * 500);
    var attackPower = Math.floor(Math.random() * 300);
    var defensivePower = Math.floor(Math.random() * 100);

    
 // set images in htmls for each character
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

    console.log(userHP);
})