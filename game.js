let map = Array ();
//what we see from the top.
// info: empty, 1 - from here we can move, 2 - (to) where we can move
let toparray = Array();

let move_color = "black";

// position of figues when you start the game
function init_map () {
    // coordinates
    map = [
        //y array capital letter is for whites
        ["ARROW", "", "PAWN", "", "", "", "pawn", "", "arrow"], // x array
        ["KNIGHT", "BISHOP", "PAWN", "", "", "", "pawn", "bishop", "knight"],
        ["SILVER", "", "PAWN", "", "", "", "pawn", "", "silver"],
        ["GOLD", "", "PAWN", "", "", "", "pawn", "", "gold"],
        ["KING", "", "PAWN", "", "", "", "pawn", "", "king"],
        ["GOLD", "", "PAWN", "", "", "", "pawn", "", "gold"],
        ["SILVER", "", "PAWN", "", "", "", "pawn", "", "silver"],
        ["KNIGHT", "ROOK", "PAWN", "", "", "", "pawn", "rook", "knight"],
        ["ARROW", "", "PAWN", "", "", "", "pawn", "", "arrow"],
    ];
}
// adding ampty values to an array
// set it to empty every time
function init_toparray () {
    toparray = [
        [" ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " "],

    ];
}

// function that will mark moves that we can move from
function mark_moves_from() {
    // clean top array before iteration
    init_toparray();
    for (let x = 0; x <= 8; x ++)
        for (let y = 0; y <= 8; y ++)
            if (can_move_from (x, y))
                toparray [x] [y] = 1;
}
// return true or false if it's the same color, it can move
function can_move_from (x, y) {
  return get_color(x, y) == move_color;
}
// which color is out figure now
// if its capital letter is white, others are black
function get_color (x, y) {
    let figure = map [x] [y];
        if (figure == " ")
            return " ";

    // if it's equal to itsels, its white, otherwise its black
    return (figure.toUpperCase() == figure) ? "white" : "black";
}

function show_map() {
    html = "<table border='1' cellspacing='0'>";
    for (let y = 8; y >= 0; y --)
    {
        html += "<tr>";
        for (let x = 0; x <= 8; x ++) {
            // if top array is empty, leave color as it is.
            if (toparray [x] [y] == " ")
            color = "#ead2a5";
            // else is ether 1(move from) or 2(move to)
            else
                color = toparray [x] [y] == "1" ? "#aaffaa" : "#83f0fa"
            html += "<td style='height: 50px; width: 50px; " + "background-color:  " + color +  ";"
            + "text-align: center;" +
            "'>";
            html += map [x] [y];
            html += "</td>";
        }
            html += "</tr>";
    }
    document.getElementById("board").innerHTML=html;
}
init_map();
mark_moves_from();
show_map();

