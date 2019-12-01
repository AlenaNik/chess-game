# Shogi Game Homework
![Image description](https://i.ibb.co/SncQgQ5/3d8ebeb7826987b777dca939811bab4f.gif)

## Run
Donwload a repository and open in any browser

## Description
```
Of Japanese origins, Shogi is played on a 9 by 9 board, and the object is to capture the opponent's king. 
There are two main differences with Western chess. First, not only pawns but almost every piece can promote if it reaches the opponents three last rows. 
Second and most distinctive characteristic is that captured pieces become property of the capturing player and during his turn he can "parachute" or "drop" them back to the board instead of performing a normal move. 
Because of this feature, similar to Bughouse, the game can last longer than a Chess game, the board generally stays fairly crowded and there is no simplification going into the endgame.
Pieces face forward by having the pointed side of each piece oriented toward the opponent's side – this shows who controls the piece during play. 
The pieces from largest (most important) to smallest (least important) are:

1 king
1 rook
1 bishop
2 gold generals
2 silver generals
2 knights
2 arrows (lances)
9 pawns
Several of these names were chosen to correspond to their rough equivalents in international chess, and not as literal translations of the Japanese names.
```

Rules: <br />
"P" - pawn - 歩 (move 1 cell) <br />
"K" - king - 王 (moves 1 cell to every direction) <br />
"B" - bishop - 角 (moves diagonally) <br />
"N" - knight - 桂 ( Г - movement) <br />
"A" - arrow - 香 only moves forward <br />
"S" - silver - 銀 moves to any diagonal cell and forward <br />
"G" - gold - 金 moves to any cell except the one behind diagonally  <br />

Uppercase letters represent white figures, lowercase black. <br />
Your turn is highlighted in green. Click to any cell to begin. If the figure is not green, you can't move it.<br />
Blue highlight will show where the figure can move.<br />

Written in JavaScript (using FP approach: immutability, pure functions, avoid side effects, given the same input make the same output)
```
* + movimiento de piezas
* (pendiente) movimiento de piezas promocionadas
* (pendiente) re introducir piezas capturadas
* (pendiente) jaque y jaque mate 

```
