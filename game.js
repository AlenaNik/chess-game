let map = Array ();
let inf = Array ();

let move_color = "white";
let move_from_x;
let move_from_y;

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
// func that checks all matrix and sees if we can move FROM (1)
// from the cell
function mark_moves_from() {
    init_inf();
    for (let x = 0; x <= 7; x++)
        for (let y = 0; y <= 7; y++)
            if (can_move_from (x, y))
                // you you can move FROM that sell, put 1 (TO is going to be two)
                inf [x] [y] = 1;
}

// func that: 1) clears inif_inf, than checkes if we can move TO (2)
function mark_moves_to() {
    init_inf();
    for (let x = 0; x <= 7; x++)
        for (let y = 0; y <= 7; y++)
            if (can_move_to (x, y))
            // you you can move FROM that sell, put 1 (TO is going to be two)
                inf [x] [y] = 2;
}

function can_move_from(x, y) {
    // if it's the same color, we can move
   return (get_color (x, y) === move_color)
}
function can_move_to(x, y) {
    // white figure can only fo on empty cell of on black figure
    if (map [x] [y] == " ")  // is it empty?
        return true;
    return get_color (x, y) !== move_color; // is it different color?
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

function click_box (x, y) {
   if (inf [x] [y] == "1")
       click_box_from (x, y);
   if (inf [x] [y] == "2")
       click_box_to (x, y);
}

// func that does the following: click on cell,save coordinates,mark where to go and display changes
function click_box_from (x, y) {
    // saving where we are coming from
    move_from_x = x;
    move_from_y = y;
    // where we want to move
    mark_moves_to ();
    //  display on map
    show_map();
}
function click_box_to (x, y) {

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
            layout += "<td class='board' style='background-color: " + color +
               //Coordinated of x and y at the moment of click
                "' onclick='click_box(" + x + ", " + y + ");'>";
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
