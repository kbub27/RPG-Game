// $(document).ready(function () {

//set wins, losses, HP, attack damage, and counter attack power(defensive power)
    var userHP = Math.floor(Math.random() * 500 + 100);
    var opponentHP = Math.floor(Math.random() * 350 + 100);
    var userAttackPower = Math.floor(Math.random() * 200 + 50);
    var enemyAttackPower = Math.floor(Math.random() * 100 + 25);
    var wins = 0;
    var enemyClicked1 = false;
    var enemyClicked2 = false;
    var enemyClicked3 = false;
    var enemyClicked4 = false;
    var enemyClicked5 = false;

 // set images in htmls for each character
    var atkButton = $("<button>");
    var startButton = $("<button>");
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
    $(atkButton).addClass("btn btn-danger");
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
    $(atkButton).attr("type", "button");
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
    $(atkButton).text("ATTACK!");

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

        $(atkButton).click(function () {
            opponentHP -= userAttackPower;
            userHP -= enemyAttackPower;
            console.log(userHP);
            console.log(opponentHP);
            $(".enemyHP").text("Enemy HP: " + opponentHP);
            $(".yourHP").text("Your HP: " + userHP);

            if (userHP <= 0) {
                alert("You have lost the Game!")
                resetGame();
            } else if (opponentHP <= 0) {
                chooseNewOpponent();
                wins++;
                console.log(wins);
            } else if (wins === 5) {
                alert("You have won!");
                resetGame();
            }
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

        $(enemyChar1).click(function () {
            enemyClicked1 = true;
            $(enemyChar2).remove();
            $(enemyChar3).remove();
            $(enemyChar4).remove();
            $(enemyChar5).remove();
            $(".attack").text("NOW FIGHT!");
            $(".fight").append(atkButton);
            $(".enemyHP").text("Enemy HP: " + opponentHP);
        })

        $(enemyChar2).click(function () {
            enemyClicked2 = true;
            $(enemyChar1).remove();
            $(enemyChar3).remove();
            $(enemyChar4).remove();
            $(enemyChar5).remove();
            $(".attack").text("NOW FIGHT!");
            $(".fight").append(atkButton);
            $(".enemyHP").text("Enemy HP: " + opponentHP);
        })

        $(enemyChar3).click(function () {
            enemyClicked3 = true;
            $(enemyChar2).remove();
            $(enemyChar1).remove();
            $(enemyChar4).remove();
            $(enemyChar5).remove();
            $(".attack").text("NOW FIGHT!");
            $(".fight").append(atkButton);
            $(".enemyHP").text("Enemy HP: " + opponentHP);
        })

        $(enemyChar4).click(function () {
            enemyClicked4 = true;
            $(enemyChar2).remove();
            $(enemyChar3).remove();
            $(enemyChar1).remove();
            $(enemyChar5).remove();
            $(".attack").text("NOW FIGHT!");
            $(".fight").append(atkButton);
            $(".enemyHP").text("Enemy HP: " + opponentHP);
        })

        $(enemyChar5).click(function () {
            enemyClicked5 = true;
            $(enemyChar2).remove();
            $(enemyChar3).remove();
            $(enemyChar4).remove();
            $(enemyChar1).remove();
            $(".attack").text("NOW FIGHT!");
            $(".fight").append(atkButton);
            $(".enemyHP").text("Enemy HP: " + opponentHP);
        })


        var resetGame = () => {
            $(userChar1).remove();
            $(userChar2).remove();
            $(userChar3).remove();
            $(userChar4).remove();
            $(userChar5).remove();
            $(enemyChar1).remove();
            $(enemyChar2).remove();
            $(enemyChar3).remove();
            $(enemyChar4).remove();
            $(enemyChar5).remove();
            $(".enemyHP").text("");
            $(".yourHP").text("");
            $(".chooseCharacter").text("");
            $(".chooseEnemy").text("");
            $(".attack").text("");           
            $(atkButton).remove();
            userHP = Math.floor(Math.random() * 500);
            opponentHP = Math.floor(Math.random() * 500);
            userAttackPower = Math.floor(Math.random() * 101);
            enemyAttackPower = Math.floor(Math.random() * 101);
            startGame();
        }

        var chooseNewOpponent = () => {
            $(enemyChar1).remove();
            $(enemyChar2).remove();
            $(enemyChar3).remove();
            $(enemyChar4).remove();
            $(enemyChar5).remove();
            $('.enemyHP').text('');
            

            if (enemyClicked1) {
                opponentHP = Math.floor(Math.random() * 250);
                enemyAttackPower = Math.floor(Math.random() * 101);
                userAttackPower += Math.floor(Math.random() * 50);
                $(".enemies").append(enemyChar2);
                $(".enemies").append(enemyChar3);
                $(".enemies").append(enemyChar4);
                $(".enemies").append(enemyChar5);
                enemyClicked1 = asd;

                $(enemyChar2).click(function () {
                    enemyClicked2 = true;
                    $(enemyChar1).remove();
                    $(enemyChar3).remove();
                    $(enemyChar4).remove();
                    $(enemyChar5).remove();
                    $(".attack").text("NOW FIGHT!");
                    $(".fight").append(atkButton);
                    $(".enemyHP").text("Enemy HP: " + opponentHP);
                })
        
                $(enemyChar3).click(function () {
                    enemyClicked3 = true;
                    $(enemyChar2).remove();
                    $(enemyChar1).remove();
                    $(enemyChar4).remove();
                    $(enemyChar5).remove();
                    $(".attack").text("NOW FIGHT!");
                    $(".fight").append(atkButton);
                    $(".enemyHP").text("Enemy HP: " + opponentHP);
                })
        
                $(enemyChar4).click(function () {
                    enemyClicked4 = true;
                    $(enemyChar2).remove();
                    $(enemyChar3).remove();
                    $(enemyChar1).remove();
                    $(enemyChar5).remove();
                    $(".attack").text("NOW FIGHT!");
                    $(".fight").append(atkButton);
                    $(".enemyHP").text("Enemy HP: " + opponentHP);
                })
        
                $(enemyChar5).click(function () {
                    enemyClicked5 = true;
                    $(enemyChar2).remove();
                    $(enemyChar3).remove();
                    $(enemyChar4).remove();
                    $(enemyChar1).remove();
                    $(".attack").text("NOW FIGHT!");
                    $(".fight").append(atkButton);
                    $(".enemyHP").text("Enemy HP: " + opponentHP);
                })
            } else if (enemyClicked2) {
                opponentHP = Math.floor(Math.random() * 250);
                enemyAttackPower = Math.floor(Math.random() * 101);
                userAttackPower += Math.floor(Math.random() * 50);
                $(".enemies").append(enemyChar1);
                $(".enemies").append(enemyChar3);
                $(".enemies").append(enemyChar4);
                $(".enemies").append(enemyChar5);
                enemyClicked2 = "already chosen";

                $(enemyChar1).click(function () {
                    enemyClicked1 === true;
                    $(enemyChar1).remove();
                    $(enemyChar3).remove();
                    $(enemyChar4).remove();
                    $(enemyChar5).remove();
                    $(".attack").text("NOW FIGHT!");
                    $(".fight").append(atkButton);
                    $(".enemyHP").text("Enemy HP: " + opponentHP);
                })
        
                $(enemyChar3).click(function () {
                    enemyClicked3 = true;
                    $(enemyChar2).remove();
                    $(enemyChar1).remove();
                    $(enemyChar4).remove();
                    $(enemyChar5).remove();
                    $(".attack").text("NOW FIGHT!");
                    $(".fight").append(atkButton);
                    $(".enemyHP").text("Enemy HP: " + opponentHP);
                })
        
                $(enemyChar4).click(function () {
                    enemyClicked4 = true;
                    $(enemyChar2).remove();
                    $(enemyChar3).remove();
                    $(enemyChar1).remove();
                    $(enemyChar5).remove();
                    $(".attack").text("NOW FIGHT!");
                    $(".fight").append(atkButton);
                    $(".enemyHP").text("Enemy HP: " + opponentHP);
                })
        
                $(enemyChar5).click(function () {
                    enemyClicked5 = true;
                    $(enemyChar2).remove();
                    $(enemyChar3).remove();
                    $(enemyChar4).remove();
                    $(enemyChar1).remove();
                    $(".attack").text("NOW FIGHT!");
                    $(".fight").append(atkButton);
                    $(".enemyHP").text("Enemy HP: " + opponentHP);
                })
            } else if (enemyClicked3) {
                opponentHP = Math.floor(Math.random() * 250);
                enemyAttackPower = Math.floor(Math.random() * 101);
                userAttackPower += Math.floor(Math.random() * 50);
                $(".enemies").append(enemyChar1);
                $(".enemies").append(enemyChar2);
                $(".enemies").append(enemyChar4);
                $(".enemies").append(enemyChar5);
                enemyClicked3 = "already chosen";

                $(enemyChar1).click(function () {
                    enemyClicked1 = true;
                    $(enemyChar1).remove();
                    $(enemyChar3).remove();
                    $(enemyChar4).remove();
                    $(enemyChar5).remove();
                    $(".attack").text("NOW FIGHT!");
                    $(".fight").append(atkButton);
                    $(".enemyHP").text("Enemy HP: " + opponentHP);
                })
        
                $(enemyChar2).click(function () {
                    enemyClicked2 = true;
                    $(enemyChar2).remove();
                    $(enemyChar1).remove();
                    $(enemyChar4).remove();
                    $(enemyChar5).remove();
                    $(".attack").text("NOW FIGHT!");
                    $(".fight").append(atkButton);
                    $(".enemyHP").text("Enemy HP: " + opponentHP);
                })
        
                $(enemyChar4).click(function () {
                    enemyClicked4 = true;
                    $(enemyChar2).remove();
                    $(enemyChar3).remove();
                    $(enemyChar1).remove();
                    $(enemyChar5).remove();
                    $(".attack").text("NOW FIGHT!");
                    $(".fight").append(atkButton);
                    $(".enemyHP").text("Enemy HP: " + opponentHP);
                })
        
                $(enemyChar5).click(function () {
                    enemyClicked5 = true;
                    $(enemyChar2).remove();
                    $(enemyChar3).remove();
                    $(enemyChar4).remove();
                    $(enemyChar1).remove();
                    $(".attack").text("NOW FIGHT!");
                    $(".fight").append(atkButton);
                    $(".enemyHP").text("Enemy HP: " + opponentHP);
                })
            } else if (enemyClicked4) {
                opponentHP = Math.floor(Math.random() * 250);
                enemyAttackPower = Math.floor(Math.random() * 101);
                userAttackPower += Math.floor(Math.random() * 50);
                $(".enemies").append(enemyChar1);
                $(".enemies").append(enemyChar3);
                $(".enemies").append(enemyChar2);
                $(".enemies").append(enemyChar5);
                enemyClicked4 = "already chosen";

                $(enemyChar1).click(function () {
                    enemyClicked1 = true;
                    $(enemyChar1).remove();
                    $(enemyChar3).remove();
                    $(enemyChar4).remove();
                    $(enemyChar5).remove();
                    $(".attack").text("NOW FIGHT!");
                    $(".fight").append(atkButton);
                    $(".enemyHP").text("Enemy HP: " + opponentHP);
                })
        
                $(enemyChar3).click(function () {
                    enemyClicked3 = true;
                    $(enemyChar2).remove();
                    $(enemyChar1).remove();
                    $(enemyChar4).remove();
                    $(enemyChar5).remove();
                    $(".attack").text("NOW FIGHT!");
                    $(".fight").append(atkButton);
                    $(".enemyHP").text("Enemy HP: " + opponentHP);
                })
        
                $(enemyChar2).click(function () {
                    enemyClicked4 = true;
                    $(enemyChar2).remove();
                    $(enemyChar3).remove();
                    $(enemyChar1).remove();
                    $(enemyChar5).remove();
                    $(".attack").text("NOW FIGHT!");
                    $(".fight").append(atkButton);
                    $(".enemyHP").text("Enemy HP: " + opponentHP);
                })
        
                $(enemyChar5).click(function () {
                    enemyClicked5 = true;
                    $(enemyChar2).remove();
                    $(enemyChar3).remove();
                    $(enemyChar4).remove();
                    $(enemyChar1).remove();
                    $(".attack").text("NOW FIGHT!");
                    $(".fight").append(atkButton);
                    $(".enemyHP").text("Enemy HP: " + opponentHP);
                })
            } else if (enemyClicked5) {
                opponentHP = Math.floor(Math.random() * 250);
                enemyAttackPower = Math.floor(Math.random() * 101);
                userAttackPower += Math.floor(Math.random() * 50);
                $(".enemies").append(enemyChar1);
                $(".enemies").append(enemyChar3);
                $(".enemies").append(enemyChar4);
                $(".enemies").append(enemyChar2);
                enemyClicked5 = "already chosen";

                $(enemyChar1).click(function () {
                    enemyClicked1 = true;
                    $(enemyChar1).remove();
                    $(enemyChar3).remove();
                    $(enemyChar4).remove();
                    $(enemyChar5).remove();
                    $(".attack").text("NOW FIGHT!");
                    $(".fight").append(atkButton);
                    $(".enemyHP").text("Enemy HP: " + opponentHP);
                })
        
                $(enemyChar3).click(function () {
                    enemyClicked3 = true;
                    $(enemyChar2).remove();
                    $(enemyChar1).remove();
                    $(enemyChar4).remove();
                    $(enemyChar5).remove();
                    $(".attack").text("NOW FIGHT!");
                    $(".fight").append(atkButton);
                    $(".enemyHP").text("Enemy HP: " + opponentHP);
                })
        
                $(enemyChar4).click(function () {
                    enemyClicked4 = true;
                    $(enemyChar2).remove();
                    $(enemyChar3).remove();
                    $(enemyChar1).remove();
                    $(enemyChar5).remove();
                    $(".attack").text("NOW FIGHT!");
                    $(".fight").append(atkButton);
                    $(".enemyHP").text("Enemy HP: " + opponentHP);
                })
        
                $(enemyChar2).click(function () {
                    enemyClicked5 = true;
                    $(enemyChar2).remove();
                    $(enemyChar3).remove();
                    $(enemyChar4).remove();
                    $(enemyChar1).remove();
                    $(".attack").text("NOW FIGHT!");
                    $(".fight").append(atkButton);
                    $(".enemyHP").text("Enemy HP: " + opponentHP);
                })
            } 
        }
    }

    startGame();
    

// })