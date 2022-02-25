let move_count = 1;
let player1;
let player2;

function name_function() {
    var name = document.getElementById("player_names");
    var welcome = document.getElementById("welcome");

    welcome.style.display = "none";
    name.style.display = "block";
}

function game_function() {
    var game = document.getElementById("main_frame");
    var name = document.getElementById("player_names");

    player1 = document.getElementById('player1').value;
    player2 = document.getElementById('player2').value;

    name.style.display = "none";
    game.style.display = "block";

    document.getElementById("p1_value").innerHTML = "X - " + player1;
    document.getElementById("p2_value").innerHTML = "O - " + player2;

    document.getElementById("p1_turn").innerHTML = player1 + "'s turn"
}

function welcome_function() {
    var game = document.getElementById("main_frame");
    var welcome = document.getElementById("welcome");

    welcome.style.display = "block";
    game.style.display = "none";
}

function rematch_function() {
    var game = document.getElementById("game_layout");
    game.style.display = "block";
    var win = document.getElementById("winner");
    win.style.display = "none";
    var p1_val = document.getElementById("p1_value");
    var p2_val = document.getElementById("p2_value");
    p1_val.style.display = "block";
    p2_val.style.display = "block";
    var p1_turn = document.getElementById("p1_turn");
    p1_turn.style.display = "block";
    var rematch = document.getElementById("rematch");
    rematch.style.display = "none";
}

function hide() {
    move_count = 1;
    var game = document.getElementById("game_layout");
    game.style.display = "none";

    var b1 = document.getElementById("box1");
    b1.style.backgroundColor = "antiquewhite";
    var b2 = document.getElementById("box2");
    b2.style.backgroundColor = "antiquewhite";
    var b3 = document.getElementById("box3");
    b3.style.backgroundColor = "antiquewhite";
    var b4 = document.getElementById("box4");
    b4.style.backgroundColor = "antiquewhite";
    var b5 = document.getElementById("box5");
    b5.style.backgroundColor = "antiquewhite";
    var b6 = document.getElementById("box6");
    b6.style.backgroundColor = "antiquewhite";
    var b7 = document.getElementById("box7");
    b7.style.backgroundColor = "antiquewhite";
    var b8 = document.getElementById("box8");
    b8.style.backgroundColor = "antiquewhite";
    var b9 = document.getElementById("box9");
    b9.style.backgroundColor = "antiquewhite";

    var cr1 = document.getElementById("cross1");
    var ci1 = document.getElementById("circle1")
    cr1.style.display = "none";
    ci1.style.display = "none";
    var cr2 = document.getElementById("cross2");
    var ci2 = document.getElementById("circle2")
    cr2.style.display = "none";
    ci2.style.display = "none";
    var cr3 = document.getElementById("cross3");
    var ci3 = document.getElementById("circle3")
    cr3.style.display = "none";
    ci3.style.display = "none";
    var cr4 = document.getElementById("cross4");
    var ci4 = document.getElementById("circle4")
    cr4.style.display = "none";
    ci4.style.display = "none";
    var cr5 = document.getElementById("cross5");
    var ci5 = document.getElementById("circle5")
    cr5.style.display = "none";
    ci5.style.display = "none";
    var cr6 = document.getElementById("cross6");
    var ci6 = document.getElementById("circle6")
    cr6.style.display = "none";
    ci6.style.display = "none";
    var cr7 = document.getElementById("cross7");
    var ci7 = document.getElementById("circle7")
    cr7.style.display = "none";
    ci7.style.display = "none";
    var cr8 = document.getElementById("cross8");
    var ci8 = document.getElementById("circle8")
    cr8.style.display = "none";
    ci8.style.display = "none";
    var cr9 = document.getElementById("cross9");
    var ci9 = document.getElementById("circle9")
    cr9.style.display = "none";
    ci9.style.display = "none";
}

function check() {
    x1 = document.getElementById("cross1");
    x2 = document.getElementById("cross2");
    x3 = document.getElementById("cross3");
    x4 = document.getElementById("cross4");
    x5 = document.getElementById("cross5");
    x6 = document.getElementById("cross6");
    x7 = document.getElementById("cross7");
    x8 = document.getElementById("cross8");
    x9 = document.getElementById("cross9");

    y1 = document.getElementById("circle1");
    y2 = document.getElementById("circle2");
    y3 = document.getElementById("circle3");
    y4 = document.getElementById("circle4");
    y5 = document.getElementById("circle5");
    y6 = document.getElementById("circle6");
    y7 = document.getElementById("circle7");
    y8 = document.getElementById("circle8");
    y9 = document.getElementById("circle9");

    p1 = document.getElementById("p1_turn");
    p2 = document.getElementById("p2_turn");

    var p1_val = document.getElementById("p1_value");
    var p2_val = document.getElementById("p2_value");

    var win = document.getElementById("winner");

    if (x1.style.display == "block" && x2.style.display == "block" && x3.style.display == "block") {
        win.style.display = "block";
        document.getElementById("winner").innerHTML = "Congratulations " + player1 + ", You Won !!";
        p1.style.display = "none";
        p2.style.display = "none";
        p1_val.style.display = "none";
        p2_val.style.display = "none";
        hide();
        var rematch = document.getElementById("rematch");
        rematch.style.display = "block";
    }
    if (x4.style.display == "block" && x5.style.display == "block" && x6.style.display == "block") {
        win.style.display = "block";
        document.getElementById("winner").innerHTML = "Congratulations " + player1 + ", You Won !!";
        p1.style.display = "none";
        p2.style.display = "none";
        p1_val.style.display = "none";
        p2_val.style.display = "none";
        hide();
        var rematch = document.getElementById("rematch");
        rematch.style.display = "block";
    }
    if (x7.style.display == "block" && x8.style.display == "block" && x9.style.display == "block") {
        win.style.display = "block";
        document.getElementById("winner").innerHTML = "Congratulations " + player1 + ", You Won !!";
        p1.style.display = "none";
        p2.style.display = "none";
        p1_val.style.display = "none";
        p2_val.style.display = "none";
        hide();
        var rematch = document.getElementById("rematch");
        rematch.style.display = "block";
    }
    if (x1.style.display == "block" && x4.style.display == "block" && x7.style.display == "block") {
        win.style.display = "block";
        document.getElementById("winner").innerHTML = "Congratulations " + player1 + ", You Won !!";
        p1.style.display = "none";
        p2.style.display = "none";
        p1_val.style.display = "none";
        p2_val.style.display = "none";
        hide();
        var rematch = document.getElementById("rematch");
        rematch.style.display = "block";
    }
    if (x2.style.display == "block" && x5.style.display == "block" && x8.style.display == "block") {
        win.style.display = "block";
        document.getElementById("winner").innerHTML = "Congratulations " + player1 + ", You Won !!";
        p1.style.display = "none";
        p2.style.display = "none";
        p1_val.style.display = "none";
        p2_val.style.display = "none";
        hide();
        var rematch = document.getElementById("rematch");
        rematch.style.display = "block";
    }
    if (x3.style.display == "block" && x6.style.display == "block" && x9.style.display == "block") {
        win.style.display = "block";
        document.getElementById("winner").innerHTML = "Congratulations " + player1 + ", You Won !!";
        p1.style.display = "none";
        p2.style.display = "none";
        p1_val.style.display = "none";
        p2_val.style.display = "none";
        hide();
        var rematch = document.getElementById("rematch");
        rematch.style.display = "block";
    }
    if (x1.style.display == "block" && x5.style.display == "block" && x9.style.display == "block") {
        win.style.display = "block";
        document.getElementById("winner").innerHTML = "Congratulations " + player1 + ", You Won !!";
        p1.style.display = "none";
        p2.style.display = "none";
        p1_val.style.display = "none";
        p2_val.style.display = "none";
        hide();
        var rematch = document.getElementById("rematch");
        rematch.style.display = "block";
    }
    if (x3.style.display == "block" && x5.style.display == "block" && x7.style.display == "block") {
        win.style.display = "block";
        document.getElementById("winner").innerHTML = "Congratulations " + player1 + ", You Won !!";
        p1.style.display = "none";
        p2.style.display = "none";
        p1_val.style.display = "none";
        p2_val.style.display = "none";
        hide();
        var rematch = document.getElementById("rematch");
        rematch.style.display = "block";
    }


    if (y1.style.display == "block" && y2.style.display == "block" && y3.style.display == "block") {
        win.style.display = "block";
        document.getElementById("winner").innerHTML = "Congratulations " + player2 + ", You Won !!";
        p1.style.display = "none";
        p2.style.display = "none";
        p1_val.style.display = "none";
        p2_val.style.display = "none";
        hide();
        var rematch = document.getElementById("rematch");
        rematch.style.display = "block";
    }
    if (y4.style.display == "block" && y5.style.display == "block" && y6.style.display == "block") {
        win.style.display = "block";
        document.getElementById("winner").innerHTML = "Congratulations " + player2 + ", You Won !!";
        p1.style.display = "none";
        p2.style.display = "none";
        p1_val.style.display = "none";
        p2_val.style.display = "none";
        hide();
        var rematch = document.getElementById("rematch");
        rematch.style.display = "block";
    }
    if (y7.style.display == "block" && y8.style.display == "block" && y9.style.display == "block") {
        win.style.display = "block";
        document.getElementById("winner").innerHTML = "Congratulations " + player2 + ", You Won !!";
        p1.style.display = "none";
        p2.style.display = "none";
        p1_val.style.display = "none";
        p2_val.style.display = "none";
        hide();
        var rematch = document.getElementById("rematch");
        rematch.style.display = "block";
    }
    if (y1.style.display == "block" && y4.style.display == "block" && y7.style.display == "block") {
        win.style.display = "block";
        document.getElementById("winner").innerHTML = "Congratulations " + player2 + ", You Won !!";
        p1.style.display = "none";
        p2.style.display = "none";
        p1_val.style.display = "none";
        p2_val.style.display = "none";
        hide();
        var rematch = document.getElementById("rematch");
        rematch.style.display = "block";
    }
    if (y2.style.display == "block" && y5.style.display == "block" && y8.style.display == "block") {
        win.style.display = "block";
        document.getElementById("winner").innerHTML = "Congratulations " + player2 + ", You Won !!";
        p1.style.display = "none";
        p2.style.display = "none";
        p1_val.style.display = "none";
        p2_val.style.display = "none";
        hide();
        var rematch = document.getElementById("rematch");
        rematch.style.display = "block";
    }
    if (y3.style.display == "block" && y6.style.display == "block" && y9.style.display == "block") {
        win.style.display = "block";
        document.getElementById("winner").innerHTML = "Congratulations " + player2 + ", You Won !!";
        p1.style.display = "none";
        p2.style.display = "none";
        p1_val.style.display = "none";
        p2_val.style.display = "none";
        hide();
        var rematch = document.getElementById("rematch");
        rematch.style.display = "block";
    }
    if (y1.style.display == "block" && y5.style.display == "block" && y9.style.display == "block") {
        win.style.display = "block";
        document.getElementById("winner").innerHTML = "Congratulations " + player2 + ", You Won !!";
        p1.style.display = "none";
        p2.style.display = "none";
        p1_val.style.display = "none";
        p2_val.style.display = "none";
        hide();
        var rematch = document.getElementById("rematch");
        rematch.style.display = "block";
    }
    if (y3.style.display == "block" && y5.style.display == "block" && y7.style.display == "block") {
        win.style.display = "block";
        document.getElementById("winner").innerHTML = "Congratulations " + player2 + ", You Won !!";
        p1.style.display = "none";
        p2.style.display = "none";
        p1_val.style.display = "none";
        p2_val.style.display = "none";
        hide();
        var rematch = document.getElementById("rematch");
        rematch.style.display = "block";
    }

    if ((x1.style.display == "block" || y1.style.display == "block") && (x2.style.display == "block" || y2.style.display == "block") && (x3.style.display == "block" || y3.style.display == "block") && (x4.style.display == "block" || y4.style.display == "block") && (x5.style.display == "block" || y5.style.display == "block") && (x6.style.display == "block" || y6.style.display == "block") && (x7.style.display == "block" || y7.style.display == "block") && (x8.style.display == "block" || y8.style.display == "block") && (x9.style.display == "block" || y9.style.display == "block")) {

        if (x1.style.display == "block" && x2.style.display == "block" && x3.style.display == "block") {
            win.style.display = "block";
            document.getElementById("winner").innerHTML = "Congratulations " + player1 + ", You Won !!"; p1.style.display = "none";
            p2.style.display = "none";
            p1_val.style.display = "none";
            p2_val.style.display = "none";
            hide();
            var rematch = document.getElementById("rematch");
            rematch.style.display = "block";
        }
        else if (x4.style.display == "block" && x5.style.display == "block" && x6.style.display == "block") {
            win.style.display = "block";
            document.getElementById("winner").innerHTML = "Congratulations " + player1 + ", You Won !!"; p1.style.display = "none";
            p2.style.display = "none";
            p1_val.style.display = "none";
            p2_val.style.display = "none";
            hide();
            var rematch = document.getElementById("rematch");
            rematch.style.display = "block";
        }
        else if (x7.style.display == "block" && x8.style.display == "block" && x9.style.display == "block") {
            win.style.display = "block";
            document.getElementById("winner").innerHTML = "Congratulations " + player1 + ", You Won !!"; p1.style.display = "none";
            p2.style.display = "none";
            p1_val.style.display = "none";
            p2_val.style.display = "none";
            hide();
            var rematch = document.getElementById("rematch");
            rematch.style.display = "block";
        }
        else if (x1.style.display == "block" && x4.style.display == "block" && x7.style.display == "block") {
            win.style.display = "block";
            document.getElementById("winner").innerHTML = "Congratulations " + player1 + ", You Won !!"; p1.style.display = "none";
            p2.style.display = "none";
            p1_val.style.display = "none";
            p2_val.style.display = "none";
            hide();
            var rematch = document.getElementById("rematch");
            rematch.style.display = "block";
        }
        else if (x2.style.display == "block" && x5.style.display == "block" && x8.style.display == "block") {
            win.style.display = "block";
            document.getElementById("winner").innerHTML = "Congratulations " + player1 + ", You Won !!"; p1.style.display = "none";
            p2.style.display = "none";
            p1_val.style.display = "none";
            p2_val.style.display = "none";
            hide();
            var rematch = document.getElementById("rematch");
            rematch.style.display = "block";
        }
        else if (x3.style.display == "block" && x6.style.display == "block" && x9.style.display == "block") {
            win.style.display = "block";
            document.getElementById("winner").innerHTML = "Congratulations " + player1 + ", You Won !!"; p1.style.display = "none";
            p2.style.display = "none";
            p1_val.style.display = "none";
            p2_val.style.display = "none";
            hide();
            var rematch = document.getElementById("rematch");
            rematch.style.display = "block";
        }
        else if (x1.style.display == "block" && x5.style.display == "block" && x9.style.display == "block") {
            win.style.display = "block";
            document.getElementById("winner").innerHTML = "Congratulations " + player1 + ", You Won !!"; p1.style.display = "none";
            p2.style.display = "none";
            p1_val.style.display = "none";
            p2_val.style.display = "none";
            hide();
            var rematch = document.getElementById("rematch");
            rematch.style.display = "block";
        }
        else if (x3.style.display == "block" && x5.style.display == "block" && x7.style.display == "block") {
            win.style.display = "block";
            document.getElementById("winner").innerHTML = "Congratulations " + player1 + ", You Won !!"; p1.style.display = "none";
            p2.style.display = "none";
            p1_val.style.display = "none";
            p2_val.style.display = "none";
            hide();
            var rematch = document.getElementById("rematch");
            rematch.style.display = "block";
        }


        else if (y1.style.display == "block" && y2.style.display == "block" && y3.style.display == "block") {
            win.style.display = "block";
            document.getElementById("winner").innerHTML = "Congratulations " + player2 + ", You Won !!";
            p1.style.display = "none";
            p2.style.display = "none";
            p1_val.style.display = "none";
            p2_val.style.display = "none";
            hide();
            var rematch = document.getElementById("rematch");
            rematch.style.display = "block";
        }
        else if (y4.style.display == "block" && y5.style.display == "block" && y6.style.display == "block") {
            win.style.display = "block";
            document.getElementById("winner").innerHTML = "Congratulations " + player2 + ", You Won !!";
            p1.style.display = "none";
            p2.style.display = "none";
            p1_val.style.display = "none";
            p2_val.style.display = "none";
            hide();
            var rematch = document.getElementById("rematch");
            rematch.style.display = "block";
        }
        else if (y7.style.display == "block" && y8.style.display == "block" && y9.style.display == "block") {
            win.style.display = "block";
            document.getElementById("winner").innerHTML = "Congratulations " + player2 + ", You Won !!";
            p1.style.display = "none";
            p2.style.display = "none";
            p1_val.style.display = "none";
            p2_val.style.display = "none";
            hide();
            var rematch = document.getElementById("rematch");
            rematch.style.display = "block";
        }
        else if (y1.style.display == "block" && y4.style.display == "block" && y7.style.display == "block") {
            win.style.display = "block";
            document.getElementById("winner").innerHTML = "Congratulations " + player2 + ", You Won !!";
            p1.style.display = "none";
            p2.style.display = "none";
            p1_val.style.display = "none";
            p2_val.style.display = "none";
            hide();
            var rematch = document.getElementById("rematch");
            rematch.style.display = "block";
        }
        else if (y2.style.display == "block" && y5.style.display == "block" && y8.style.display == "block") {
            win.style.display = "block";
            document.getElementById("winner").innerHTML = "Congratulations " + player2 + ", You Won !!";
            p1.style.display = "none";
            p2.style.display = "none";
            p1_val.style.display = "none";
            p2_val.style.display = "none";
            hide();
            var rematch = document.getElementById("rematch");
            rematch.style.display = "block";
        }
        else if (y3.style.display == "block" && y6.style.display == "block" && y9.style.display == "block") {
            win.style.display = "block";
            document.getElementById("winner").innerHTML = "Congratulations " + player2 + ", You Won !!";
            p1.style.display = "none";
            p2.style.display = "none";
            p1_val.style.display = "none";
            p2_val.style.display = "none";
            hide();
            var rematch = document.getElementById("rematch");
            rematch.style.display = "block";
        }
        else if (y1.style.display == "block" && y5.style.display == "block" && y9.style.display == "block") {
            win.style.display = "block";
            document.getElementById("winner").innerHTML = "Congratulations " + player2 + ", You Won !!";
            p1.style.display = "none";
            p2.style.display = "none";
            p1_val.style.display = "none";
            p2_val.style.display = "none";
            hide();
            var rematch = document.getElementById("rematch");
            rematch.style.display = "block";
        }
        else if (y3.style.display == "block" && y5.style.display == "block" && y7.style.display == "block") {
            win.style.display = "block";
            document.getElementById("winner").innerHTML = "Congratulations " + player2 + ", You Won !!";
            p1.style.display = "none";
            p2.style.display = "none";
            p1_val.style.display = "none";
            p2_val.style.display = "none";
            hide();
            var rematch = document.getElementById("rematch");
            rematch.style.display = "block";
        }
        else {
            win.style.display = "block";
            document.getElementById("winner").innerHTML = "Match Drawn";
            p1.style.display = "none";
            p2.style.display = "none";
            p1_val.style.display = "none";
            p2_val.style.display = "none";
            hide();
            var rematch = document.getElementById("rematch");
            rematch.style.display = "block";
        }
    }

}

function input_function1() {
    var x = document.getElementById("cross1");
    var y = document.getElementById("circle1");

    var player;
    if (move_count % 2 != 0) {
        var box_id = document.getElementById("box1");
        box_id.style.backgroundColor = "green";
        player = player1;
        x.style.display = "block";
        move_count++;
        var turn1 = document.getElementById("p1_turn");
        turn1.style.display = "none";
        var turn2 = document.getElementById("p2_turn");
        turn2.style.display = "block";
        document.getElementById("p2_turn").innerHTML = player2 + "'s turn";
        check();

    }
    else {
        var box_id = document.getElementById("box1");
        box_id.style.backgroundColor = "red";
        player = player2;
        y.style.display = "block";
        move_count++;
        var turn2 = document.getElementById("p2_turn");
        turn2.style.display = "none";
        var turn1 = document.getElementById("p1_turn");
        turn1.style.display = "block";
        document.getElementById("p1_turn").innerHTML = player1 + "'s turn";
        check();
    }
}

function input_function2() {
    var x = document.getElementById("cross2");
    var y = document.getElementById("circle2");

    var player;
    if (move_count % 2 != 0) {
        var box_id = document.getElementById("box2");
        box_id.style.backgroundColor = "green";
        player = player1;
        x.style.display = "block";
        move_count++;
        var turn1 = document.getElementById("p1_turn");
        turn1.style.display = "none";
        var turn2 = document.getElementById("p2_turn");
        turn2.style.display = "block";
        document.getElementById("p2_turn").innerHTML = player2 + "'s turn";
        check();
    }
    else {
        var box_id = document.getElementById("box2");
        box_id.style.backgroundColor = "red";
        player = player2;
        y.style.display = "block";
        move_count++;
        var turn2 = document.getElementById("p2_turn");
        turn2.style.display = "none";
        var turn1 = document.getElementById("p1_turn");
        turn1.style.display = "block";
        document.getElementById("p1_turn").innerHTML = player1 + "'s turn";
        check();
    }
}

function input_function3() {
    var x = document.getElementById("cross3");
    var y = document.getElementById("circle3");

    var player;
    if (move_count % 2 != 0) {
        var box_id = document.getElementById("box3");
        box_id.style.backgroundColor = "green";
        player = player1;
        x.style.display = "block";
        move_count++;
        var turn1 = document.getElementById("p1_turn");
        turn1.style.display = "none";
        var turn2 = document.getElementById("p2_turn");
        turn2.style.display = "block";
        document.getElementById("p2_turn").innerHTML = player2 + "'s turn";
        check();
    }
    else {
        var box_id = document.getElementById("box3");
        box_id.style.backgroundColor = "red";
        player = player2;
        y.style.display = "block";
        move_count++;
        var turn2 = document.getElementById("p2_turn");
        turn2.style.display = "none";
        var turn1 = document.getElementById("p1_turn");
        turn1.style.display = "block";
        document.getElementById("p1_turn").innerHTML = player1 + "'s turn";
        check();
    }
}
function input_function4() {
    var x = document.getElementById("cross4");
    var y = document.getElementById("circle4");

    var player;
    if (move_count % 2 != 0) {
        var box_id = document.getElementById("box4");
        box_id.style.backgroundColor = "green";
        player = player1;
        x.style.display = "block";
        move_count++;
        var turn1 = document.getElementById("p1_turn");
        turn1.style.display = "none";
        var turn2 = document.getElementById("p2_turn");
        turn2.style.display = "block";
        document.getElementById("p2_turn").innerHTML = player2 + "'s turn";
        check();
    }
    else {
        var box_id = document.getElementById("box4");
        box_id.style.backgroundColor = "red";
        player = player2;
        y.style.display = "block";
        move_count++;
        var turn2 = document.getElementById("p2_turn");
        turn2.style.display = "none";
        var turn1 = document.getElementById("p1_turn");
        turn1.style.display = "block";
        document.getElementById("p1_turn").innerHTML = player1 + "'s turn";
        check();
    }
}

function input_function5() {
    var x = document.getElementById("cross5");
    var y = document.getElementById("circle5");

    var player;
    if (move_count % 2 != 0) {
        var box_id = document.getElementById("box5");
        box_id.style.backgroundColor = "green";
        player = player1;
        x.style.display = "block";
        move_count++;
        var turn1 = document.getElementById("p1_turn");
        turn1.style.display = "none";
        var turn2 = document.getElementById("p2_turn");
        turn2.style.display = "block";
        document.getElementById("p2_turn").innerHTML = player2 + "'s turn";
        check();
    }
    else {
        var box_id = document.getElementById("box5");
        box_id.style.backgroundColor = "red";
        player = player2;
        y.style.display = "block";
        move_count++;
        var turn2 = document.getElementById("p2_turn");
        turn2.style.display = "none";
        var turn1 = document.getElementById("p1_turn");
        turn1.style.display = "block";
        document.getElementById("p1_turn").innerHTML = player1 + "'s turn";
        check();
    }
}
function input_function6() {
    var x = document.getElementById("cross6");
    var y = document.getElementById("circle6");

    var player;
    if (move_count % 2 != 0) {
        var box_id = document.getElementById("box6");
        box_id.style.backgroundColor = "green";
        player = player1;
        x.style.display = "block";
        move_count++;
        var turn1 = document.getElementById("p1_turn");
        turn1.style.display = "none";
        var turn2 = document.getElementById("p2_turn");
        turn2.style.display = "block";
        document.getElementById("p2_turn").innerHTML = player2 + "'s turn";
        check();
    }
    else {
        var box_id = document.getElementById("box6");
        box_id.style.backgroundColor = "red";
        player = player2;
        y.style.display = "block";
        move_count++;
        var turn2 = document.getElementById("p2_turn");
        turn2.style.display = "none";
        var turn1 = document.getElementById("p1_turn");
        turn1.style.display = "block";
        document.getElementById("p1_turn").innerHTML = player1 + "'s turn";
        check();
    }
}
function input_function7() {
    var x = document.getElementById("cross7");
    var y = document.getElementById("circle7");

    var player;
    if (move_count % 2 != 0) {
        var box_id = document.getElementById("box7");
        box_id.style.backgroundColor = "green";
        player = player1;
        x.style.display = "block";
        move_count++;
        var turn1 = document.getElementById("p1_turn");
        turn1.style.display = "none";
        var turn2 = document.getElementById("p2_turn");
        turn2.style.display = "block";
        document.getElementById("p2_turn").innerHTML = player2 + "'s turn";
        check();
    }
    else {
        var box_id = document.getElementById("box7");
        box_id.style.backgroundColor = "red";
        player = player2;
        y.style.display = "block";
        move_count++;
        var turn2 = document.getElementById("p2_turn");
        turn2.style.display = "none";
        var turn1 = document.getElementById("p1_turn");
        turn1.style.display = "block";
        document.getElementById("p1_turn").innerHTML = player1 + "'s turn";
        check();
    }
}
function input_function8() {
    var x = document.getElementById("cross8");
    var y = document.getElementById("circle8");

    var player;
    if (move_count % 2 != 0) {
        var box_id = document.getElementById("box8");
        box_id.style.backgroundColor = "green";
        player = player1;
        x.style.display = "block";
        move_count++;
        var turn1 = document.getElementById("p1_turn");
        turn1.style.display = "none";
        var turn2 = document.getElementById("p2_turn");
        turn2.style.display = "block";
        document.getElementById("p2_turn").innerHTML = player2 + "'s turn";
        check();
    }
    else {
        var box_id = document.getElementById("box8");
        box_id.style.backgroundColor = "red";
        player = player2;
        y.style.display = "block";
        move_count++;
        var turn2 = document.getElementById("p2_turn");
        turn2.style.display = "none";
        var turn1 = document.getElementById("p1_turn");
        turn1.style.display = "block";
        document.getElementById("p1_turn").innerHTML = player1 + "'s turn";
        check();
    }
}
function input_function9() {
    var x = document.getElementById("cross9");
    var y = document.getElementById("circle9");

    var player;
    if (move_count % 2 != 0) {
        var box_id = document.getElementById("box9");
        box_id.style.backgroundColor = "green";
        player = player1;
        x.style.display = "block";
        move_count++;
        var turn1 = document.getElementById("p1_turn");
        turn1.style.display = "none";
        var turn2 = document.getElementById("p2_turn");
        turn2.style.display = "block";
        document.getElementById("p2_turn").innerHTML = player2 + "'s turn";
        check();
    }
    else {
        var box_id = document.getElementById("box9");
        box_id.style.backgroundColor = "red";
        player = player2;
        y.style.display = "block";
        move_count++;
        var turn2 = document.getElementById("p2_turn");
        turn2.style.display = "none";
        var turn1 = document.getElementById("p1_turn");
        turn1.style.display = "block";
        document.getElementById("p1_turn").innerHTML = player1 + "'s turn";
        check();
    }
}

function alert_function() {
    alert("This Feature is Under Development. Keep Playing !");
}