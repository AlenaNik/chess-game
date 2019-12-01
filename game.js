let map = Array ();
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


function show_map() {
    html = "<table border='1' cellspacing='0'>";
    for (let y = 8; y >= 0; y --)
    {
        html += "<tr>";
        for (let x = 0; x <= 8; x ++) {
            color = "#ead2a5"
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
show_map();

