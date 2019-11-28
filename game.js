let map = Array ();
let inf = Array ();

let move_color = "black";

function init_map() {
    map = [
        // y0    y1    y2   y3   y4    y5    y6   y7
        ["R", "P", "", "", "", "", "p", "r"], // x = 0 negros a la derecha!
        ["N", "P", "", "", "", "", "p", "n"], // x = 1
        ["B", "P", "", "", "", "", "p", "b"], // x = 2
        ["Q", "P", "", "", "", "", "p", "q"], // x = 3
        ["K", "P", "", "", "", "", "p", "k"], // x = 4
        ["B", "P", "", "", "", "", "p", "b"], // x = 5
        ["N", "P", "", "", "", "", "p", "n"], // x = 6
        ["R", "P", "", "", "", "", "p", "r"] // x = 7
    ];
}
function init_inf() {
    inf =
        [
            // empty cells to indicate where you could move
            // 1 means that you could go FROM this cell
            // 2 means that you can go TO that (or any) cell
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
        ];
}
// func that checks all matrix and sees if we can move
// from the cell
function mark_moves_from() {
    init_inf();
    for (let x = 0; x <= 7; x++)
        for (let y = 0; y <= 7; y++)
            if (can_move_from (x, y))
                // you you can move from that sell, put 1
                inf [x] [y] = 1;
}
function can_move_from(x, y) {
    // if it's the same color, we can move
   return (get_color (x, y) === move_color)
}
// check the color of the figure: black, white or empty
function get_color(x, y) {
    let figure = map [x] [y];
    if (figure === '')
        return "";
    // since we know that the upper case is white, we check if
    // figure is equal to itself, so it's white
    return (figure.toUpperCase() === figure) ? "white" : "black";
}
function show_map() {
    // creating 2D arrays https://p5js.org/examples/arrays-array-2d.html

    layout = "<table>";
    for (let y = 7; y >= 0; y--) {
        layout += "<tr>";
        layout += "<td>" + y + "</td>";
        for (let x = 0; x <= 7; x++) {
            if (inf [x] [y] === " ")
                color = (x + y) % 2 ? "white" : "grey";
            else
                color = inf[x] [y] === "1" ? "green" : "#62F9FE";
            layout += "<td class='board' style='background-color: " + color + "'>";
            layout += map [x] [y];
               layout += "</td>";
        }
        layout += "</tr>";
        document.getElementById('chess').innerHTML = layout;
    }
}
init_map();
mark_moves_from();
show_map();
