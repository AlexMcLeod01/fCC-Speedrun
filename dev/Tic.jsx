import React from "react";
import {render} from "react-dom";
import {Title} from "./Title.jsx";
import {Header} from "./Header.jsx";
import $ from "jquery";

export class Tic extends React.Component {
    componentDidMount () {
        // In this function is the legacy code
        tacToe.startAnim();
        
        $("#start-over").on("click", function() {
            tacToe.startAnim();
        });

        $("#one").on("click", function() {
            if (tacToe.curBoard[0][0] === 0 && tacToe.humanTurn) {
                tacToe.setBoard(0, 0, tacToe.humanIs);
                tacToe.humanTurn = false;
                tacToe.turnNum++;
                $("#oneA").html(tacToe.humanIs);
                if (tacToe.checkWin()) {
                    tacToe.winAnim();
                } else {
                    tacToeComp.makeMove();
                }
            }
        });

        $("#two").on("click", function() {
            if (tacToe.curBoard[0][1] === 0 && tacToe.humanTurn) {
                tacToe.setBoard(0, 1, tacToe.humanIs);
                tacToe.humanTurn = false;
                tacToe.turnNum++;
                if (tacToe.checkWin()) {
                    tacToe.winAnim();
                } else {
                    tacToeComp.makeMove();
                }
                $("#twoA").html(tacToe.humanIs);
            }
        });

        $("#three").on("click", function() {
            if (tacToe.curBoard[0][2] === 0 && tacToe.humanTurn) {
                tacToe.setBoard(0, 2, tacToe.humanIs);
                tacToe.humanTurn = false;
                tacToe.turnNum++;
                $("#threeA").html(tacToe.humanIs);
                if (tacToe.checkWin()) {
                    tacToe.winAnim();
                } else {
                    tacToeComp.makeMove();
                }
            }
        });

        $("#four").on("click", function() {
            if (tacToe.curBoard[1][0] === 0 && tacToe.humanTurn) {
                tacToe.setBoard(1, 0, tacToe.humanIs);
                tacToe.humanTurn = false;
                tacToe.turnNum++;
                $("#fourA").html(tacToe.humanIs);
                if (tacToe.checkWin()) {
                    tacToe.winAnim();
                } else {
                    tacToeComp.makeMove();
                }
            }
        });

        $("#five").on("click", function() {
            if (tacToe.curBoard[1][1] === 0 && tacToe.humanTurn) {
                tacToe.setBoard(1, 1, tacToe.humanIs);
                tacToe.humanTurn = false;
                tacToe.turnNum++;
                $("#fiveA").html(tacToe.humanIs);
                if (tacToe.checkWin()) {
                    tacToe.winAnim();
                } else {
                    tacToeComp.makeMove();
                }
            }
        });

        $("#six").on("click", function() {
            if (tacToe.curBoard[1][2] === 0 && tacToe.humanTurn) {
                tacToe.setBoard(1, 2, tacToe.humanIs);
                tacToe.humanTurn = false;
                tacToe.turnNum++;
                $("#sixA").html(tacToe.humanIs);
                if (tacToe.checkWin()) {
                    tacToe.winAnim();
                } else {
                    tacToeComp.makeMove();
                }
            }
        });

        $("#seven").on("click", function() {
            if (tacToe.curBoard[2][0] === 0 && tacToe.humanTurn) {
                tacToe.setBoard(2, 0, tacToe.humanIs);
                tacToe.humanTurn = false;
                tacToe.turnNum++;
                $("#sevenA").html(tacToe.humanIs);
                if (tacToe.checkWin()) {
                    tacToe.winAnim();
                } else {
                    tacToeComp.makeMove();
                }
            }
        });

        $("#eight").on("click", function() {
            if (tacToe.curBoard[2][1] === 0 && tacToe.humanTurn) {
                tacToe.setBoard(2, 1, tacToe.humanIs);
                tacToe.humanTurn = false;
                tacToe.turnNum++;
                $("#eightA").html(tacToe.humanIs);
                if (tacToe.checkWin()) {
                    tacToe.winAnim();
                } else {
                    tacToeComp.makeMove();
                }
            }
        });

        $("#nine").on("click", function() {
        if (tacToe.curBoard[2][2] === 0 && tacToe.humanTurn) {
            tacToe.setBoard(2, 2, tacToe.humanIs);
            tacToe.humanTurn = false;
            tacToe.turnNum++;
            $("#nineA").html(tacToe.humanIs);
                if (tacToe.checkWin()) {
                    tacToe.winAnim();
                } else {
                    tacToeComp.makeMove();
                }
            }
        });
    }
    render () {
        const style = {
            marginLeft: 'auto',
            marginRight: 'auto',
            height: '150vh',
            width: '75vw'
        };
        
        const startOver = {
            fontSize: '30px',
            textAlign: 'center'
        };
        
        return (
            <div>
                <Header/>
                <div style={style}>
                    <Title text="Tic Tac Toe"/>
                    <Choose/>
                    <Board/>
                    <div style={startOver} id="start-over">Start Over?</div>
                </div>
            </div>
        );
    }
}

class Choose extends React.Component {
    render () {
        const style = {
            fontSize: '90px',
            textAlign: 'center'
        };
        
        const font = {
            fontFamily: 'Amita'
        }
        
        return (
            <div style={style} id="text">
                <div className="X" id="X">X</div>
                <div className="or" id="or" style={font}>or</div>
                <div className="O" id="O">O</div>
                <div className="Win" id="Win"></div>
                <div className="restart" id="restart">
                </div>
            </div>
        );
    }
}

class Board extends React.Component {
    render () {
        const style = {
            margin: 'auto',
            height: '300px',
            width: '300px',
            backgroundColor: 'AA7243',
            display: 'flex',
            flexWrap: 'wrap'
        };
        
        return (
            <div style={style} className="board" id="board">
                <Square id="one"/>
                <Square id="two"/>
                <Square id="three"/>
                <Square id="four"/>
                <Square id="five"/>
                <Square id="six"/>
                <Square id="seven"/>
                <Square id="eight"/>
                <Square id="nine"/>
            </div>
        );
    }
}

class Square extends React.Component {
    render () {
        const innerSty = {
            fontSize: '60px'
        };
        
        const style = {
            color: 'black',
            borderStyle: 'solid',
            borderWidth: '2px',
            height: '96px',
            width: '96px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        };
        
        return (
            <div id={this.props.id} style={style}>
                <div id={this.props.id + "A"} style={innerSty}></div>
            </div>
        );
    }
}

/*      Below here is the legacy code */
var tacToe = {
  curBoard: [[0,0,0],
            [0,0,0],
            [0,0,0]],
  turnNum: 1,
  humanTurn: true,
  humanIs: 'X',
  compIs: 'O',
  
  setBoard: function(row, col, val) {
    tacToe.curBoard[row][col] = val;
  },
  
  clearBoard: function() {
    tacToe.curBoard = [[0,0,0],
                      [0,0,0],
                      [0,0,0]];
    $("#oneA, #twoA, #threeA, #fourA, #fiveA, #sixA, #sevenA, #eightA, #nineA").html('');
  },
  
  checkRow: function(row) {
      var x = tacToe.curBoard[row];
    if (x[0] === x[1] && x[1] === x[2] && x[0] != 0) {
      return true;
    } else {
      return false;
    }
  },
  
  checkCol: function(col) {
      var x = tacToe.curBoard;
      var y = [x[0][col], x[1][col], x[2][col]]
    if (y[0] === y[1] && y[1] === y[2] && y[1] != 0) {
      return true;
    } else {
      return false;
    }
  },
  
  checkDia: function() {
      var x = tacToe.curBoard;
      var y = [x[0][0], x[1][1], x[2][2]];
      var z = [x[0][2], x[1][1], x[2][0]];
    if ((z[0] === z[1] && z[1] === z[2]) || (y[0] === y[1] && y[1] === y[2]) && (y[1] != 0)) {
      return true;
    } else {
      return false;
    }
  },
  
  startAnim: function() {
    $("#board").fadeOut();
    $("#start-over").fadeOut();
    $("#X").fadeIn();
    $("#or").fadeIn();
    $("#O").fadeIn();
    
    $("#X").on("click", function() {
  tacToe.humanIs = 'X';
  tacToe.compIs = 'O';
  tacToe.newGameAnim();
});
    $("#O").on("click", function() {
  tacToe.humanIs = 'O';
  tacToe.compIs = 'X';
  tacToe.newGameAnim();
});
  },
  
  winAnim: function() {
    $("#board").fadeOut();
    $("#start-over").fadeOut();
    $("#oneA, #twoA, #threeA, #fourA, #fiveA, #sixA, #sevenA, #eightA, #nineA").html('');
    $("#Win").html(tacToe.checkWin() + " wins!");
    $("#restart").html("Restart?");
    $("#Win, #restart").fadeIn();
    $("#restart").on("click", function() {
      $("#Win, #restart").fadeOut();
      tacToe.newGameAnim();
    });
  },
  
  drawAnim: function() {
    tacToe.clearBoard();
    $("#board").fadeOut();
    $("#start-over").fadeOut();
    $("#oneA, #twoA, #threeA, #fourA, #fiveA, #sixA, #sevenA, #eightA, #nineA").html('');
    $("#Win").html("DRAW!");
    $("#restart").html(" Restart?");
    $("#Win, #restart").fadeIn();
    $("#restart").on("click", function() {
      $("#restart").fadeOut();
      $("#Win").fadeOut();
      tacToe.newGameAnim();
    });
  },
  
  newGameAnim: function() {
    $("#X, #or, #O").fadeOut();
    tacToe.clearBoard();
    $("#board").fadeIn();
    tacToe.turnNum = 1;
    tacToe.clearBoard();
    $("#start-over").fadeIn();
    
    if (tacToe.humanIs == 'X') {
      tacToe.humanTurn = true;
    } else {
      tacToe.humanTurn = false;
      tacToeComp.makeMove();
    }
  },
  
  checkWin: function() {
    if (tacToe.checkRow(0)) {
      return tacToe.curBoard[0][0];
    } else if (tacToe.checkRow(1)) {
      return tacToe.curBoard[1][0];
    } else if (tacToe.checkRow(2)) {
      return tacToe.curBoard[2][0];
    } else if (tacToe.checkCol(0)) {
      return tacToe.curBoard[0][0];
    } else if (tacToe.checkCol(1)) {
      return tacToe.curBoard[0][1];
    } else if (tacToe.checkCol(2)) {
      return tacToe.curBoard[0][2];
    } else if (tacToe.checkDia()) {
      return tacToe.curBoard[1][1];
    } else {
      return false;
    }
  },
};

var tacToeComp = {
  squareNum: [
  ["one", "two", "three"],
  ["four", "five", "six"],
  ["seven", "eight", "nine"]
  ],
  
  go: function(row, col, numStr) {
    tacToe.setBoard(row, col, tacToe.compIs);
    tacToe.humanTurn = true;
    tacToe.turnNum++;
    document.getElementById(numStr + "A").innerHTML = tacToe.compIs;
    if (tacToe.checkWin()) {
      tacToe.winAnim();
    }
  },
  
  makeTwo: function() {
    if (tacToe.curBoard[1][1] === 0) {
      tacToeComp.go(1, 1, "five");
    } else if (tacToe.curBoard[0][1] === 0) {
      tacToeComp.go(0, 1, "two");
    } else if (tacToe.curBoard[1][0] === 0) {
      tacToeComp.go(1, 0, "four");
    } else if (tacToe.curBoard[0][0] === 0) {
        tacToeComp.go(0, 0, "one");
    } else if (tacToe.curBoard[1][2] === 0) {
      tacToeComp.go(1, 2, "six");
    } else if (tacToe.curBoard[2][0] === 0) {
        tacToeComp.go(2, 0, "seven");
    } else if (tacToe.curBoard[2][1] === 0) {
      tacToeComp.go(2, 1, "eight");
    } else if (tacToe.curBoard[2][2] === 0) {
        tacToeComp.go(2, 2, "nine");
    } else {
        tacToeComp.go(0, 2, "three");
    }
  },
  
  checkRow: function(row) {
    var r = tacToe.curBoard[row];
    if (r[0] === r[1] && r[2] === 0 && r[0] !== 0) {
        return 2;
    } else if (r[1] === r[2] && r[0] === 0 && r[1] !== 0) {
      return 0;
    } else if (r[0] === r[2] && r[1] === 0 && r[0] !== 0) {
      return 1;
    } else {
      return false;
    }
  },
  
  checkCol: function(col) {
    if (tacToe.curBoard[0][col] === tacToe.curBoard[1][col] && tacToe.curBoard[2][col] === 0 && tacToe.curBoard[0][col] !== 0) {
        return 2;
    } else if (tacToe.curBoard[1][col] === tacToe.curBoard[2][col] && tacToe.curBoard[0][col] === 0 && tacToe.curBoard[1][col] != 0) {
      return 0;
    } else if (tacToe.curBoard[0][col] === tacToe.curBoard[2][col] && tacToe.curBoard[1][col] === 0 && tacToe.curBoard[0][col] !== 0) {
      return 1;
    } else {
      return false;
    }
  },
  
  checkDia: function() {
    if (tacToe.curBoard[1][1] === tacToe.curBoard[0][0] && tacToe.curBoard[2][2] === 0 && tacToe.curBoard[1][1] !== 0) {
      return [2, 2];
    } else if (tacToe.curBoard[1][1] === tacToe.curBoard[2][2] && tacToe.curBoard[0][0] === 0 && tacToe.curBoard[1][1] !== 0) {
      return [0, 0];
    } else if (tacToe.curBoard[1][1] === tacToe.curBoard[0][2] && tacToe.curBoard[2][0] === 0 && tacToe.curBoard[1][1] !== 0) {
      return [2, 0];
    } else if (tacToe.curBoard[1][1] === tacToe.curBoard[2][0] && tacToe.curBoard[0][2] === 0 && tacToe.curBoard[1][1] !== 0) {
      return [0, 2];
    } else if (tacToe.curBoard[1][1] === 0 && tacToe.curBoard[0][0] === tacToe.curBoard[2][2] && tacToe.curBoard[0][0] !== 0) {
      return [1, 1];
    } else if (tacToe.curBoard[1][1] === 0 && tacToe.curBoard[0][2] === tacToe.curBoard[2][0] && tacToe.curBoard[0][2] !== 0) {
      return [1, 1];
    } else {
      return false;
    }
  },
  
  possWin: function() {
    var x = tacToeComp.checkRow(0);
    var y = tacToeComp.checkRow(1);
    var z = tacToeComp.checkRow(2);
    var a = tacToeComp.checkCol(0);
    var b = tacToeComp.checkCol(1);
    var c = tacToeComp.checkCol(2);
    var g = tacToeComp.checkDia();
    if (x !== false) {
      var str = tacToeComp.squareNum[0][x];
      return [0, x, str];
    } else if (y !== false) {
      var str = tacToeComp.squareNum[1][y];
      return [1, y, str];
    } else if (z !== false) {
      var str = tacToeComp.squareNum[2][z];
      return [2, z, str];
  } else if (a !== false) {
      var str = tacToeComp.squareNum[a][0];
      return [a, 0, str];
    } else if (b !== false) {
      var str = tacToeComp.squareNum[b][1];
      return [b, 1, str];
    } else if (c !== false) {
      var str = tacToeComp.squareNum[c][2];
      return [c, 2, str];
    } else if (g !== false) {
      return [g[0], g[1], tacToeComp.squareNum[g[0]][g[1]]];
    } else {
      return false;
    }
  },
  
  firstBlank: function() {
    var x = [];
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (tacToe.curBoard[i][j] === 0) {
          x.push([i, j, tacToeComp.squareNum[i][j]]);
        }
      }
    }
    return x[0];
  },
  
  makeMove: function() {
    var x = tacToeComp.possWin();
    switch (tacToe.turnNum) {
      case 1:
        console.log(tacToe.turnNum,0,0);
        tacToeComp.go(0, 0, "one");
        break;
      case 2:
        if (tacToe.curBoard[1][1] === 0) {
          console.log(tacToe.turnNum,1,1);
           tacToeComp.go(1, 1, "five");
        } else {
          console.log(tacToe.turnNum,0,0);
          tacToeComp.go(0, 0, "one");
        }
        break;
      case 3:
        if (x === false) {
          if (tacToe.curBoard[2][2] === 0) {
            console.log(tacToe.turnNum,2,2);
            tacToeComp.go(2, 2, "nine");
          } else if (tacToe.curBoard[0][2] === 0) {
            console.log(tacToe.turnNum,0,2);
            tacToeComp.go(0, 2, "three");
          } else {
            console.log(tacToe.turnNum,"makeTwo");
            tacToeComp.makeTwo();
          }
        } else {
          console.log(tacToe.turnNum,x);
          tacToeComp.go(x[0], x[1], x[2]);
        }
        break;
      case 4:
        if (x !== false) {
          console.log(tacToe.turnNum,'x', x);
          tacToeComp.go(x[0], x[1], x[2]);
        } else {
          console.log("makeTwo");
          tacToeComp.makeTwo();
        }
        break;
      case 5:
        if (x === false) {
          if (tacToe.curBoard[2][0] === 0) {
            console.log(2,0);
            tacToeComp.go(2, 0, "seven");
          } else if (tacToe.curBoard[0][2] === 0) {
            console.log(0,2);
            tacToeComp.go(0, 2, "three");
          } else {
            console.log("makeTwo");
            tacToeComp.makeTwo();
          }
        } else {
          console.log(x);
          tacToeComp.go(x[0], x[1], x[2]);
        }
        break;
      case 6:
        if (x === false) {
          console.log("makeTwo");
          tacToeComp.makeTwo();
        } else {
          console.log(x);
          tacToeComp.go(x[0], x[1], x[2]);
        }
        break;
      case 7:
        if (x === false) {
          console.log("firstBlank");
          var frst = tacToeComp.firstBlank();
          tacToeComp.go(frst[0], frst[1], frst[2]);
        } else {
          console.log(x);
          tacToeComp.go(x[0], x[1], x[2]);
        }
        break;
      case 8:
        if (x === false) {
          console.log("firstBlank");
          var frst = tacToeComp.firstBlank();
          tacToeComp.go(frst[0], frst[1], frst[2]);
        } else {
          console.log(x);
          tacToeComp.go(x[0], x[1], x[2]);
        }
        break;
      case 9:
        console.log('firstBlank');
        var frst = tacToeComp.firstBlank();
          tacToeComp.go(frst[0], frst[1], frst[2]);
        break;
    }
    tacToe.humanTurn = true;
    if (tacToe.turnNum > 9) {
        if (tacToe.checkWin()) {
            tacToe.winAnim();
        } else {
            tacToe.drawAnim();
        }
    }
  }
};