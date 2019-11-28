let map = Array ();
function init_map() {
    map = [
        // y0    y1    y2   y3   y4    y5    y6   y7
        ["", "P", "", "", "", "", "p", ""], // x = 0 negros a la derecha!
        ["", "P", "", "", "", "", "p", ""], // x = 1
        ["", "P", "", "", "", "", "p", ""], // x = 2
        ["", "P", "", "", "", "", "p", ""], // x = 3
        ["", "P", "", "", "", "", "p", ""], // x = 4
        ["", "P", "", "", "", "", "p", ""], // x = 5
        ["", "P", "", "", "", "", "p", ""], // x = 6
        ["", "P", "", "", "", "", "p", ""] // x = 7
    ];
}

function show_map() {
    layout = "<table>";
    for (let y = 7; y >= 0; y--) {
        layout += "<tr>";
        layout += "<td>" + y + "</td>";
        for (let x = 0; x <= 7; x++) {
            color = (x + y) % 2 ? "white" : "black";
            layout += "<td class='board' style='background-color: " + color + "'>";
            layout += map [x] [y];
               layout += "</td>";
        }
        layout += "</tr>";
        document.getElementById('chess').innerHTML = layout;
    }
}
init_map();
show_map();
