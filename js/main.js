class Grid {
    constructor(r, c) {
        this.row = r;
        this.column = c;
    }
}

class Part {
    constructor(r, c) {
        this.row = r;
        this.column = c;
    }
}

class Piece{
    constructor(offset) {
        this.offset = offset;
        this.parts = [new Part(0,0),new Part(0,0),new Part(0,0),new Part(0,0)];
        this.type = "None";
        this.color = "black";
        this.size = 0;
        this.r = 0;
    }
    square(){
        this.parts = [new Part(0, 0+this.offset), new Part(1, 0+this.offset), new Part(0, 1+this.offset), new Part(1, 1+this.offset)]
        this.type = "Square";
        this.color = "yellow";
        this.size = 4;
        this.r = 0;
    }
    long(){
        this.parts = [new Part(0, 0+this.offset), new Part(1, 0+this.offset), new Part(2, 0+this.offset), new Part(3, 0+this.offset)]
        this.type = "Long";
        this.color = "lightblue";
        this.size = 4;
        this.r = 0;
    }
    T(){
        this.parts = [new Part(0, 1+this.offset), new Part(1, 0+this.offset), new Part(1, 1+this.offset), new Part(2, 1+this.offset)]
        this.type = "T";
        this.color = "purple";
        this.size = 4;
        this.r = 0;
    }
    L(){
        this.parts = [new Part(0, 0+this.offset), new Part(0, 1+this.offset), new Part(1, 1+this.offset), new Part(2, 1+this.offset)]
        this.type = "L";
        this.color = "orange";
        this.size = 4;
    }
    Li(){
        this.parts = [new Part(2, 0+this.offset), new Part(2, 1+this.offset), new Part(1, 1+this.offset), new Part(0, 1+this.offset)]
        this.type = "Li";
        this.color = "blue";
        this.size = 4;
    }
    Cross(){
        this.parts = [new Part(0, 0+this.offset), new Part(1, 0+this.offset), new Part(1, 1+this.offset), new Part(2, 1+this.offset)]
        this.type = "Cross";
        this.color = "green";
        this.size = 4;
    }
    Crossi(){
        this.parts = [new Part(0, 1+this.offset), new Part(1, 1+this.offset), new Part(1, 0+this.offset), new Part(2, 0+this.offset)]
        this.type = "Crossi";
        this.color = "red";
        this.size = 4;
    }

    checkRotate(stopPieces){
        return true;
    }
    rotate(stopPieces){
        console.log(this.r);
        if(this.type === "Square"){
            return true;
        }
        if(this.checkRotate(stopPieces)){
            switch (this.type){
                case "Long":
                    if(this.r===0){
                        let nRow = this.parts[1].row;
                        let nCol = this.parts[1].column;
                        this.parts[0].row = nRow;
                        this.parts[1].row = nRow;
                        this.parts[2].row = nRow;
                        this.parts[3].row = nRow;
                        this.parts[0].column = nCol-1;
                        this.parts[1].column = nCol;
                        this.parts[2].column = nCol+1;
                        this.parts[3].column = nCol+2;
                        this.r = 1;
                    }else{
                        let nRow = this.parts[1].row;
                        let nCol = this.parts[1].column;
                        this.parts[0].row = nRow-1;
                        this.parts[1].row = nRow;
                        this.parts[2].row = nRow+1;
                        this.parts[3].row = nRow+2;
                        this.parts[0].column = nCol;
                        this.parts[1].column = nCol;
                        this.parts[2].column = nCol;
                        this.parts[3].column = nCol;
                        this.r = 0;
                    }
                    break;
                case "T":
                    if(this.r===0){
                        let nRow = this.parts[2].row;
                        let nCol = this.parts[2].column;

                        this.parts[0].row = nRow;
                        this.parts[1].row = nRow-1;
                        this.parts[2].row = nRow;
                        this.parts[3].row = nRow;
                        this.parts[0].column = nCol+1;
                        this.parts[1].column = nCol;
                        this.parts[2].column = nCol;
                        this.parts[3].column = nCol-1;
                        this.r=1
                    }else if(this.r===1){
                        let nRow = this.parts[2].row;
                        let nCol = this.parts[2].column;

                        //  1
                        // 320
                        this.parts[0].row = nRow+1;
                        this.parts[1].row = nRow;
                        this.parts[2].row = nRow;
                        this.parts[3].row = nRow-1;
                        this.parts[0].column = nCol;
                        this.parts[1].column = nCol+1;
                        this.parts[2].column = nCol;
                        this.parts[3].column = nCol;
                        this.r=2
                    }else if(this.r===2){
                        let nRow = this.parts[2].row;
                        let nCol = this.parts[2].column;

                        //  3
                        //  2 1
                        //  0
                        this.parts[0].row = nRow;
                        this.parts[1].row = nRow+1;
                        this.parts[2].row = nRow;
                        this.parts[3].row = nRow;
                        this.parts[0].column = nCol-1;
                        this.parts[1].column = nCol;
                        this.parts[2].column = nCol;
                        this.parts[3].column = nCol+1;
                        this.r=3
                    }else if(this.r===3){
                        let nRow = this.parts[2].row;
                        let nCol = this.parts[2].column;

                        //
                        // 0 2 3
                        //   1
                        this.parts[0].row = nRow-1;
                        this.parts[1].row = nRow;
                        this.parts[2].row = nRow;
                        this.parts[3].row = nRow+1;
                        this.parts[0].column = nCol;
                        this.parts[1].column = nCol-1;
                        this.parts[2].column = nCol;
                        this.parts[3].column = nCol;
                        this.r=0
                    }
                    break;
                case "L":
                    if(this.r===0){
                        let nRow = this.parts[2].row;
                        let nCol = this.parts[2].column;

                        // 0 1
                        //   2
                        //   3
                        this.parts[0].row = nRow-1;
                        this.parts[1].row = nRow;
                        this.parts[2].row = nRow;
                        this.parts[3].row = nRow;
                        this.parts[0].column = nCol+1;
                        this.parts[1].column = nCol+1;
                        this.parts[2].column = nCol;
                        this.parts[3].column = nCol-1;
                        this.r=1
                    }else if(this.r===1){
                        let nRow = this.parts[2].row;
                        let nCol = this.parts[2].column;

                        //     0
                        // 3 2 1
                        //
                        this.parts[0].row = nRow+1;
                        this.parts[1].row = nRow+1;
                        this.parts[2].row = nRow;
                        this.parts[3].row = nRow-1;
                        this.parts[0].column = nCol+1;
                        this.parts[1].column = nCol;
                        this.parts[2].column = nCol;
                        this.parts[3].column = nCol;
                        this.r=2
                    }else if(this.r===2){
                        let nRow = this.parts[2].row;
                        let nCol = this.parts[2].column;

                        //   3
                        //   2
                        //   1 0
                        this.parts[0].row = nRow+1;
                        this.parts[1].row = nRow;
                        this.parts[2].row = nRow;
                        this.parts[3].row = nRow;
                        this.parts[0].column = nCol-1;
                        this.parts[1].column = nCol-1;
                        this.parts[2].column = nCol;
                        this.parts[3].column = nCol+1;
                        this.r=3
                    }else if(this.r===3){
                        let nRow = this.parts[2].row;
                        let nCol = this.parts[2].column;

                        //
                        // 1 2 3
                        // 0
                        this.parts[0].row = nRow-1;
                        this.parts[1].row = nRow-1;
                        this.parts[2].row = nRow;
                        this.parts[3].row = nRow+1;
                        this.parts[0].column = nCol-1;
                        this.parts[1].column = nCol;
                        this.parts[2].column = nCol;
                        this.parts[3].column = nCol;
                        this.r=0
                    }
                    break;
                case "Li":
                    if(this.r===0){
                        let nRow = this.parts[2].row;
                        let nCol = this.parts[2].column;

                        //   3
                        //   2
                        // 0 1
                        this.parts[0].row = nRow-1;
                        this.parts[1].row = nRow;
                        this.parts[2].row = nRow;
                        this.parts[3].row = nRow;
                        this.parts[0].column = nCol-1;
                        this.parts[1].column = nCol-1;
                        this.parts[2].column = nCol;
                        this.parts[3].column = nCol+1;
                        this.r=1
                    }else if(this.r===1){
                        let nRow = this.parts[2].row;
                        let nCol = this.parts[2].column;

                        // 0
                        // 1 2 3
                        //
                        this.parts[0].row = nRow-1;
                        this.parts[1].row = nRow-1;
                        this.parts[2].row = nRow;
                        this.parts[3].row = nRow+1;
                        this.parts[0].column = nCol+1;
                        this.parts[1].column = nCol;
                        this.parts[2].column = nCol;
                        this.parts[3].column = nCol;
                        this.r=2
                    }else if(this.r===2){
                        let nRow = this.parts[2].row;
                        let nCol = this.parts[2].column;

                        //   1 0
                        //   2
                        //   3
                        this.parts[0].row = nRow+1;
                        this.parts[1].row = nRow;
                        this.parts[2].row = nRow;
                        this.parts[3].row = nRow;
                        this.parts[0].column = nCol+1;
                        this.parts[1].column = nCol+1;
                        this.parts[2].column = nCol;
                        this.parts[3].column = nCol-1;
                        this.r=3
                    }else if(this.r===3){
                        let nRow = this.parts[2].row;
                        let nCol = this.parts[2].column;

                        //
                        // 3 2 1
                        //     0
                        this.parts[0].row = nRow+1;
                        this.parts[1].row = nRow;
                        this.parts[2].row = nRow+1;
                        this.parts[3].row = nRow-1;
                        this.parts[0].column = nCol-1;
                        this.parts[1].column = nCol;
                        this.parts[2].column = nCol;
                        this.parts[3].column = nCol;
                        this.r=0
                    }
                    break;
            }
        }

    }
}

let updateHandler;

let debugPieceCounter = 0;

let rows = 22;
let columns = 10;

let stopGrids;
let stopPieces;

let piece;


function printPieces(){
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            let eId = "r"+i+"c"+j;
            let eGrid = document.getElementById(eId);
            eGrid.style.backgroundColor = "black";
        }
    }

    for (let i = 0; i < stopPieces.length; i++) {
        for (let j = 0; j < stopPieces[i].size; j++) {
            let eId = "r"+ stopPieces[i].parts[j].row+"c"+ stopPieces[i].parts[j].column;
            let eGrid = document.getElementById(eId);

            eGrid.style.backgroundColor = stopPieces[i].color;
        }
    }

    /*for (let i = 0; i < stopGrids.length; i++) {

        let eId = "r"+ stopGrids[i].row+"c"+ stopGrids[i].column;
        let eGrid = document.getElementById(eId);

        eGrid.style.backgroundColor = "red";
    }*/
    for (let i = 0; i < piece.size; i++) {
        let eId = "r"+ piece.parts[i].row+"c"+ piece.parts[i].column;
        let eGrid = document.getElementById(eId);

        switch (i){
            case 0:
                eGrid.style.backgroundColor = "red";
                break;
            case 1:
                eGrid.style.backgroundColor = "blue";
                break;
            case 2:
                eGrid.style.backgroundColor = "green";
                break;
            case 3:
                eGrid.style.backgroundColor = "white";
                break;
        }
        //eGrid.style.backgroundColor = piece.color;
    }
}

function updateStopGrids(){
    for (let i = 0; i < stopGrids.length; i++) {
        let emptyGrids = rows-1;
        for (let j = rows-1; j > 0; j--) {
            let eId = "r"+j+"c"+ stopGrids[i].column;
            let eGrid = document.getElementById(eId);
            if(eGrid.style.backgroundColor === "black" || eGrid.style.backgroundColor === "red"){
                stopGrids[i].row = j;
                break;
            }else {
                emptyGrids--;
            }
        }
        if(emptyGrids===0){
            return false;
        }
    }
    return true;
}

function checkStop(){
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < stopGrids.length; j++) {
            if(stopGrids[j].row === piece.parts[i].row && stopGrids[j].column === piece.parts[i].column){
                stopPieces[stopPieces.length] = piece;
                if(!updateStopGrids()){
                    console.log("You lost.");
                    delete (updateHandler);
                    return false;
                }
                makeMewPiece();
                return true;
            }

        }
    }
    return false;
}

function checkStop_pieces(){

    for (let i = 0; i < 4; i++) {
        let nextRow = piece.parts[i].row+1;
        let nextColumn = piece.parts[i].column;

        if(nextRow===rows){
            stopPieces[stopPieces.length] = piece;
            makeMewPiece();
            return true;
        }

        for (let j = 0; j < stopPieces.length; j++) {
            for (let k = 0; k < 4; k++) {
                if(stopPieces[j].parts[k].row === nextRow &&stopPieces[j].parts[k].column === nextColumn){
                    stopPieces[stopPieces.length] = piece;
                    makeMewPiece();
                    return true;
                }
            }
        }
    }
    return false;
}

function movePiece(){
    if(!checkStop_pieces()) {
        for (let i = 0; i < 4; i++) {
            piece.parts[i].row++;
        }
    }
}

function checkPieceLeft(){
    for (let i = 0; i < 4; i++) {
        if(piece.parts[i].column-1 < 0){
            return false;
        }
        for (let j = 0; j < stopPieces.length; j++) {
            for (let k = 0; k < 4; k++) {
                if(piece.parts[i].column-1 === stopPieces[j].parts[k].column && piece.parts[i].row === stopPieces[j].parts[k].row ){
                    return false;
                }
            }
        }
    }
    return true;
}

function checkPieceRight(){
    for (let i = 0; i < 4; i++) {
        if(piece.parts[i].column+1 >= columns){
            return false;
        }
        for (let j = 0; j < stopPieces.length; j++) {
            for (let k = 0; k < 4; k++) {
                if(piece.parts[i].column+1 === stopPieces[j].parts[k].column && piece.parts[i].row === stopPieces[j].parts[k].row ){
                    return false;
                }
            }
        }
    }
    return true;
}
function movePieceLeft(){
    if(checkPieceLeft()) {
        for (let i = 0; i < 4; i++) {
            piece.parts[i].column--;
        }
    }
}
function movePieceRight(){
    if(checkPieceRight()) {
        for (let i = 0; i < 4; i++) {
            piece.parts[i].column++;
        }
    }
}

function rotatePiece(){
    piece.rotate(stopPieces);
}

function updateAsync(){
    printPieces();
    movePiece();
}

function makeMewPiece(){
    piece = new Piece(2);
    piece.Li();

    debugPieceCounter++;
}


function main(){
    stopPieces = [];
    stopGrids = [new Grid(rows-1, 0),new Grid(rows-1, 1),new Grid(rows-1, 2),new Grid(rows-1, 3),new Grid(rows-1, 4),new Grid(rows-1, 5),new Grid(rows-1, 6),new Grid(rows-1, 7),new Grid(rows-1, 8),new Grid(rows-1, 9)];

    makeMewPiece();

    updateHandler = setInterval(updateAsync, 500);

    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let rotate = document.getElementById("rotate");

    left.addEventListener("click", movePieceLeft);
    right.addEventListener("click", movePieceRight);
    rotate.addEventListener("click", rotatePiece);
    console.log("Loaded main.js");
}

window.addEventListener("load", main);