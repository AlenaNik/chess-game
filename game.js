// global variables for matrix
let map = Array(9);
let inf = Array(9);

let move_color = "white";
let move_from_x;
let move_from_y;

function init_map() {
    map = [
        // y0    y1    y2   y3   y4    y5    y6   y7  y8
        ["A", "", "P", "", "", "", "p", "", "a"], // x = 0 negros a la derecha!
        ["N", "B", "P", "", "", "", "p", "b", "n"], // x = 1
        ["S", "", "P", "", "", "", "p", "", "s"], // x = 2
        ["G", "", "P", "", "", "", "p", "", "g"], // x = 3
        ["K", "", "P", "", "", "", "p", "", "k"], // x = 4
        ["G", "", "P", "", "", "", "p", "", "g"], // x = 5
        ["S", "", "P", "", "", "", "p", "", "s"], // x = 6
        ["N", "R", "P", "", "", "", "p", "r", "n"], // x = 7
        ["A", "", "P", "", "", "", "p", "", "a"] // x = 8
    ];
}
function init_inf() {
    inf =
        [
            // empty cells to indicate where you could move
            // 1 means that you could go FROM this cell
            // 2 means that you can go TO that (or any) cell
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
// func that sets condition if figure can move
// s - source
// d - destination
function can_move( sx, sy, dx, dy) {
    // checking if can moves
            if (!can_move_from(sx, sy))
                return false;
            if (!can_move_to(dx, dy))
                return false;
            return is_correct_move(sx, sy, dx, dy);
}
// if the cell is not on map, and return empty
function is_empty (x, y) {
    if(!on_map (x, y)) return false;
    return map [ x ] [ y ] == " ";
}
//check if we are on board
function on_map (x, y) {
    return (x >= 0 && x <= 8 && y >= 0 && y <= 8)
}
// correct move! important func where all moves for figures are
function is_correct_move (sx, sy, dx, dy) {
    let item = map [ sx ] [ sy ];
    if (is_king (item))
        return is_correct_king_move (sx, sy, dx, dy);
    if (is_bishop (item))
        return is_correct_bishop_move (sx, sy, dx, dy);
    if (is_knight (item))
        return is_correct_knight_move (sx, sy, dx, dy);
    if (is_rook (item))
        return is_correct_rook_move (sx, sy, dx, dy);
    if (is_arrow (item))
        return is_correct_arrow_move (sx, sy, dx, dy);
    if (is_silver (item))
        return is_correct_silver_move (sx, sy, dx, dy);
    if (is_gold (item))
        return is_correct_gold_move (sx, sy, dx, dy);
    if (is_pawn (item))
        return is_correct_pawn_move (sx, sy, dx, dy);
    return true;
}
// functions for each figure for black and whites
const is_king = item => item.toUpperCase() == 'K';
// bishop func
const is_bishop = item => item.toUpperCase() == 'B';
// knight func
const is_knight = item => item.toUpperCase() == 'N';
//rook func
const is_rook = item => item.toUpperCase() == 'R';
// pawn func
const is_pawn = item => item.toUpperCase() == 'P';
// arrow func
const is_arrow = item => item.toUpperCase() == 'A';
// gold func
const is_gold = item => item.toUpperCase() == 'G';
// silver func
const is_silver = item => item.toUpperCase() == 'S';

// correct movements for each figure
function is_correct_king_move (sx, sy, dx, dy) {
    if (Math.abs (dx - sx ) <= 1 && Math.abs (dy - sy) <= 1)
    return true;
}

function is_correct_bishop_move (sx, sy, dx, dy) {
    return is_correct_line_move(sx, sy, dx, dy, "B" )
}

function is_correct_knight_move (sx, sy, dx, dy) {
    // module function to see the difference
    return (Math.abs (dx - sx) == 1 && Math.abs(dy - sy) == 2) ||
     (Math.abs (dx - sx) == 2 && Math.abs(dy - sy) == 1)
}
function is_correct_rook_move (sx, sy, dx, dy) {
    let changing_y = 0;
    let changing_x = 0;
    if (dx > sx) changing_x = +1;
    if (dx < sx) changing_x = -1;
    if (dy > sy) changing_y = +1;
    if (dy < sy) changing_y = -1;
    if (Math.abs (changing_x) + Math.abs(changing_y) != 1)
        return false;
    return true;
}
// arrow only moves forward
function is_correct_arrow_move (sx, sy, dx, dy) {
    let changing_y = 0;
    let changing_x = 0;
    if (dx > sx) changing_x = +1;
    if (dx < sx) changing_x = -1;
    if (dy > sy) changing_y = +1;
    if (dy < sy) changing_y = -1;
    if (Math.abs (changing_x) + Math.abs(changing_y) != 1)
        return false;
    return true;
}
//
function is_correct_gold_move (sx, sy, dx, dy) {
    if (Math.abs (dx - sx ) <= 1 && Math.abs (dy - sy) <= 1)
        return true;
}

// silver only moves forward
function is_correct_silver_move (sx, sy, dx, dy) {
    if (Math.abs (dx - sx ) <= 1 && Math.abs (dy - sy) <= 1)
        return true;
}

// pawn only moves forward
function is_correct_pawn_move (sx, sy, dx, dy) {
    let changing_y = 0;
    if (dx > sx) changing_x = +1;
    if (dx < sx) changing_x = -1;
    if (dy > sy) changing_y = +1;
    if (dy < sy) changing_y = -1;
    do {
        sy += changing_y;
        if (sx == dx && sy == dy) // final of board
            return true;
    }  while (is_empty(sx, sy))
    return false;
}

// func that serves as a moving forward (to keep separating a repeated functionality (DRY))
function is_correct_line_move (sx, sy, dx, dy, item) {
    // how much we have to move sx and sy to get to dx dy
    let changing_x = 0;
    let changing_y = 0;
    if (dx > sx) changing_x = +1; // dx is bigger, sum 1
    if (dx < sx) changing_x = -1;
    if (dy > sy) changing_y = +1; // if we move up, sum 1 to y
    if (dy < sy) changing_y = -1;
    if(!is_correct_line_change(changing_y, changing_x, item))
            return false;
    do {
        sx += changing_x;
        sy += changing_y;
        if (sx == dx && sy == dy) // final of board
            return true;
    }  while (is_empty(sx, sy));
    return false;
}
function is_correct_line_change(changing_y, changing_x, item) {
    if (is_rook (item))
        return is_correct_rook_change (changing_x, changing_y);
    if (is_bishop (item))
        return is_correct_bishop_change (changing_x, changing_y);
    return false;
}
function is_correct_rook_change (changing_x, changing_y) {
    if (Math.abs (changing_x) + Math.abs(changing_y) != 1)
        return false;
    return true;
}

function is_correct_bishop_change (changing_x, changing_y) {
    return Math.abs (changing_x) + Math.abs(changing_y) == 2;
}


// func that checks all matrix and sees if we can move FROM (1)
// from the cell
function mark_moves_from() {
    init_inf();
    // Even thought the complexity of this algorithm is O(n^4), n gets very large, it might need optimization in the future.
    for (let sx = 0; sx <= 8; sx++)
        for (let sy = 0; sy <= 8; sy++)
            for (let dx = 0; dx <= 8; dx++)
                for (let dy = 0; dy <= 8; dy++)
                    // if we can move from sx sy to any other dx dy
                    if (can_move (sx, sy, dx, dy))
                    // you you can move FROM that cell, put 1 (TO is going to be two)
                        inf [sx] [sy] = 1;
}

// func that: 1) clears inif_inf, than checkes if we can move TO (2)
// s - source where we are moving from
// d - destination where we are  moving to
function mark_moves_to () {
    init_inf();
    for (let x = 0; x <= 8; x++)
        for (let y = 0; y <= 8; y++)
            // if we can move from sx sy to any other dx dy
           if (can_move ( move_from_x, move_from_y, x, y))
            // you you can move TO that cell, put 2
                inf [x] [y] = 2;
}

function can_move_from(x, y) {
    // if it's the same color, we can move
   return (get_color (x, y) == move_color)
}
function can_move_to(x, y) {
    // white figure can only fo on empty cell of on black figure
    if (map [x] [y] == " ")  // is it empty?
        return true;
    return get_color (x, y) != move_color; // is it different color?
}

// check the color of the figure: black, white or empty
function get_color(x, y) {
    let figure = map [x] [y];
    if (figure == '')
        return " ";
    // since we know that the upper case is white, we check if
    // figure is equal to itself, so it's white
    return (figure.toUpperCase() == figure) ? "white" : "black";
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
    map [x] [y] = map [move_from_x] [move_from_y];
    // empty the cell where the figure is coming from
    map [move_from_x] [move_from_y] = " ";
    turn_change();
    mark_moves_from();
    show_map();

}
// func that changes turn by checking color
function turn_change() {
    move_color = move_color == "white" ? "black" : "white";
}

function show_map() {
    // creating 2D arrays https://p5js.org/examples/arrays-array-2d.html

    layout = "<table>";
    for (let y = 8; y >= 0; y--) {
        layout += "<tr>";
        layout += "<td></td>";
        for (let x = 0; x <= 8; x++) {
            if (inf [x] [y] == " ")
                color = "#e7b751";
            else
                color = inf[x] [y] == "1" ? "#aaffaa" : "#47e5fa";
            layout += "<td class='board' style='background-color: " + color + "; " +
               //Coordinated of x and y at the moment of click
                "' onclick='click_box(" + x + ", " + y + "); '>";
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
