let rows = 22;
let columns = 10;

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
        this.parts = [];
        this.type = "None";
        this.color = "black";
        this.r = 0;
    }
    Square(){
        this.parts = [new Part(0, 0+this.offset), new Part(1, 0+this.offset), new Part(0, 1+this.offset), new Part(1, 1+this.offset)]
        this.type = "Square";
        this.color = "yellow";
        this.r = 0;
    }
    Long(){
        this.parts = [new Part(0, 0+this.offset), new Part(1, 0+this.offset), new Part(2, 0+this.offset), new Part(3, 0+this.offset)]
        this.type = "Long";
        this.color = "lightblue";
        this.r = 0;
    }
    T(){
        this.parts = [new Part(0, 1+this.offset), new Part(1, 0+this.offset), new Part(1, 1+this.offset), new Part(2, 1+this.offset)]
        this.type = "T";
        this.color = "purple"
        this.r = 0;
    }
    L(){
        this.parts = [new Part(0, 0+this.offset), new Part(0, 1+this.offset), new Part(1, 1+this.offset), new Part(2, 1+this.offset)]
        this.type = "L";
        this.color = "orange";
        this.r = 0;
    }
    Li(){
        this.parts = [new Part(2, 0+this.offset), new Part(2, 1+this.offset), new Part(1, 1+this.offset), new Part(0, 1+this.offset)]
        this.type = "Li";
        this.color = "blue";
        this.r = 0;
    }
    Cross(){
        this.parts = [new Part(0, 0+this.offset), new Part(1, 0+this.offset), new Part(1, 1+this.offset), new Part(2, 1+this.offset)]
        this.type = "Cross";
        this.color = "green";
        this.r = 0;
    }
    Crossi(){
        this.parts = [new Part(0, 1+this.offset), new Part(1, 1+this.offset), new Part(1, 0+this.offset), new Part(2, 0+this.offset)]
        this.type = "Crossi";
        this.color = "red";
        this.r = 0;
    }

    checkPosition(stopPieces, part){
        for (let i = 0; i < stopPieces.length; i++) {
            for (let j = 0; j < stopPieces[j].parts.length; j++) {
                if(stopPieces[i].parts[j].row === part.row && stopPieces[i].parts[j].column === part.column){
                    console.log("part");
                    return false;
                }
            }
        }
        if(part.row < 0 || part.row >= rows || part.column < 0 || part.column >= columns){
            console.log("border");
            return false;
        }
        return true;
    }

    checkRotate(stopPieces){
        switch (this.type) {
            case "Long":
                if (this.r === 0) {
                    let nRow = this.parts[1].row;
                    let nCol = this.parts[1].column;
                    let r0 = nRow;
                    let r1 = nRow;
                    let r2 = nRow;
                    let r3 = nRow;
                    let c0 = nCol - 1;
                    let c1 = nCol;
                    let c2 = nCol + 1;
                    let c3 = nCol + 2;

                    if (!this.checkPosition(stopPieces, new Part(r0, c0))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r1, c1))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r2, c2))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r3, c3))){
                        return false;
                    }
                } else {
                    let nRow = this.parts[1].row;
                    let nCol = this.parts[1].column;
                    let r0 = nRow - 1;
                    let r1 = nRow;
                    let r2 = nRow + 1;
                    let r3 = nRow + 2;
                    let c0 = nCol;
                    let c1 = nCol;
                    let c2 = nCol;
                    let c3 = nCol;

                    if (!this.checkPosition(stopPieces, new Part(r0, c0))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r1, c1))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r2, c2))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r3, c3))){
                        return false;
                    }
                }
                break;
            case "T":
                if(this.r===0){
                    let nRow = this.parts[2].row;
                    let nCol = this.parts[2].column;

                    let r0 = nRow;
                    let r1 = nRow-1;
                    let r2 = nRow;
                    let r3 = nRow;
                    let c0 = nCol+1;
                    let c1 = nCol;
                    let c2 = nCol;
                    let c3 = nCol-1;
                    if (!this.checkPosition(stopPieces, new Part(r0, c0))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r1, c1))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r2, c2))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r3, c3))){
                        return false;
                    }
                }else if(this.r===1){
                    let nRow = this.parts[2].row;
                    let nCol = this.parts[2].column;

                    //  1
                    // 320
                    let r0 = nRow+1;
                    let r1 = nRow;
                    let r2 = nRow;
                    let r3 = nRow-1;
                    let c0 = nCol;
                    let c1 = nCol+1;
                    let c2 = nCol;
                    let c3 = nCol;
                    if (!this.checkPosition(stopPieces, new Part(r0, c0))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r1, c1))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r2, c2))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r3, c3))){
                        return false;
                    }
                }else if(this.r===2){
                    let nRow = this.parts[2].row;
                    let nCol = this.parts[2].column;

                    //  3
                    //  2 1
                    //  0
                    let r0 = nRow;
                    let r1 = nRow+1;
                    let r2 = nRow;
                    let r3 = nRow;
                    let c0 = nCol-1;
                    let c1 = nCol;
                    let c2 = nCol;
                    let c3 = nCol+1;
                    if (!this.checkPosition(stopPieces, new Part(r0, c0))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r1, c1))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r2, c2))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r3, c3))){
                        return false;
                    }
                }else if(this.r===3){
                    let nRow = this.parts[2].row;
                    let nCol = this.parts[2].column;

                    //
                    // 0 2 3
                    //   1
                    let r0 = nRow-1;
                    let r1 = nRow;
                    let r2 = nRow;
                    let r3 = nRow+1;
                    let c0 = nCol;
                    let c1 = nCol-1;
                    let c2 = nCol;
                    let c3 = nCol;
                    if (!this.checkPosition(stopPieces, new Part(r0, c0))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r1, c1))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r2, c2))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r3, c3))){
                        return false;
                    }
                }
                break;
            case "L":
                if(this.r===0){
                    let nRow = this.parts[2].row;
                    let nCol = this.parts[2].column;

                    // 0 1
                    //   2
                    //   3
                    let r0 = nRow-1;
                    let r1 = nRow;
                    let r2 = nRow;
                    let r3 = nRow;
                    let c0 = nCol+1;
                    let c1 = nCol+1;
                    let c2 = nCol;
                    let c3 = nCol-1
                    if (!this.checkPosition(stopPieces, new Part(r0, c0))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r1, c1))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r2, c2))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r3, c3))){
                        return false;
                    }
                }else if(this.r===1){
                    let nRow = this.parts[2].row;
                    let nCol = this.parts[2].column;

                    //     0
                    // 3 2 1
                    //
                    let r0 = nRow+1;
                    let r1 = nRow+1;
                    let r2 = nRow;
                    let r3 = nRow-1;
                    let c0 = nCol+1;
                    let c1 = nCol;
                    let c2 = nCol;
                    let c3 = nCol;
                    if (!this.checkPosition(stopPieces, new Part(r0, c0))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r1, c1))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r2, c2))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r3, c3))){
                        return false;
                    }
                }else if(this.r===2){
                    let nRow = this.parts[2].row;
                    let nCol = this.parts[2].column;

                    //   3
                    //   2
                    //   1 0
                    let r0 = nRow+1;
                    let r1 = nRow;
                    let r2 = nRow;
                    let r3 = nRow;
                    let c0 = nCol-1;
                    let c1 = nCol-1;
                    let c2 = nCol;
                    let c3 = nCol+1;
                    if (!this.checkPosition(stopPieces, new Part(r0, c0))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r1, c1))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r2, c2))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r3, c3))){
                        return false;
                    }
                }else if(this.r===3){
                    let nRow = this.parts[2].row;
                    let nCol = this.parts[2].column;

                    //
                    // 1 2 3
                    // 0
                    let r0 = nRow-1;
                    let r1 = nRow-1;
                    let r2 = nRow;
                    let r3 = nRow+1;
                    let c0 = nCol-1;
                    let c1 = nCol;
                    let c2 = nCol;
                    let c3 = nCol;
                    if (!this.checkPosition(stopPieces, new Part(r0, c0))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r1, c1))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r2, c2))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r3, c3))){
                        return false;
                    }
                }
                break;
            case "Li":
                if(this.r===0){
                    let nRow = this.parts[2].row;
                    let nCol = this.parts[2].column;

                    //   3
                    //   2
                    // 0 1
                    let r0 = nRow-1;
                    let r1 = nRow;
                    let r2 = nRow;
                    let r3 = nRow;
                    let c0 = nCol-1;
                    let c1 = nCol-1;
                    let c2 = nCol;
                    let c3 = nCol+1;
                    if (!this.checkPosition(stopPieces, new Part(r0, c0))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r1, c1))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r2, c2))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r3, c3))){
                        return false;
                    }
                }else if(this.r===1){
                    let nRow = this.parts[2].row;
                    let nCol = this.parts[2].column;

                    // 0
                    // 1 2 3
                    //
                    let r0 = nRow-1;
                    let r1 = nRow-1;
                    let r2 = nRow;
                    let r3 = nRow+1;
                    let c0 = nCol+1;
                    let c1 = nCol;
                    let c2 = nCol;
                    let c3 = nCol;
                    if (!this.checkPosition(stopPieces, new Part(r0, c0))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r1, c1))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r2, c2))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r3, c3))){
                        return false;
                    }
                }else if(this.r===2){
                    let nRow = this.parts[2].row;
                    let nCol = this.parts[2].column;

                    //   1 0
                    //   2
                    //   3
                    let r0 = nRow+1;
                    let r1 = nRow;
                    let r2 = nRow;
                    let r3 = nRow;
                    let c0 = nCol+1;
                    let c1 = nCol+1;
                    let c2 = nCol;
                    let c3 = nCol-1;
                    if (!this.checkPosition(stopPieces, new Part(r0, c0))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r1, c1))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r2, c2))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r3, c3))){
                        return false;
                    }
                }else if(this.r===3){
                    let nRow = this.parts[2].row;
                    let nCol = this.parts[2].column;

                    //
                    // 3 2 1
                    //     0
                    let r0 = nRow+1;
                    let r1 = nRow;
                    let r2 = nRow+1;
                    let r3 = nRow-1;
                    let c0 = nCol-1;
                    let c1 = nCol;
                    let c2 = nCol;
                    let c3 = nCol;
                    if (!this.checkPosition(stopPieces, new Part(r0, c0))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r1, c1))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r2, c2))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r3, c3))){
                        return false;
                    }
                }
                break;
            case "Cross":
                if(this.r===0){
                    let nRow = this.parts[1].row;
                    let nCol = this.parts[1].column;

                    // 0
                    // 1 2
                    //   3
                    let r0 = nRow;
                    let r1 = nRow;
                    let r2 = nRow+1;
                    let r3 = nRow+1;
                    let c0 = nCol+1;
                    let c1 = nCol;
                    let c2 = nCol;
                    let c3 = nCol-1;
                    if (!this.checkPosition(stopPieces, new Part(r0, c0))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r1, c1))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r2, c2))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r3, c3))){
                        return false;
                    }
                }else if(this.r===1){
                    let nRow = this.parts[1].row;
                    let nCol = this.parts[1].column;

                    //
                    //   1 0
                    // 3 2
                    let r0 = nRow+1;
                    let r1 = nRow;
                    let r2 = nRow;
                    let r3 = nRow-1;
                    let c0 = nCol;
                    let c1 = nCol;
                    let c2 = nCol-1;
                    let c3 = nCol-1;
                    if (!this.checkPosition(stopPieces, new Part(r0, c0))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r1, c1))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r2, c2))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r3, c3))){
                        return false;
                    }
                }else if(this.r===2){
                    let nRow = this.parts[1].row;
                    let nCol = this.parts[1].column;

                    // 3
                    // 2 1
                    //   0
                    let r0 = nRow;
                    let r1 = nRow;
                    let r2 = nRow-1;
                    let r3 = nRow-1;
                    let c0 = nCol-1;
                    let c1 = nCol;
                    let c2 = nCol;
                    let c3 = nCol+1;
                    if (!this.checkPosition(stopPieces, new Part(r0, c0))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r1, c1))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r2, c2))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r3, c3))){
                        return false;
                    }
                }else if(this.r===3){
                    let nRow = this.parts[1].row;
                    let nCol = this.parts[1].column;

                    //   2 3
                    // 0 1
                    //
                    let r0 = nRow-1;
                    let r1 = nRow;
                    let r2 = nRow;
                    let r3 = nRow+1;
                    let c0 = nCol;
                    let c1 = nCol;
                    let c2 = nCol+1;
                    let c3 = nCol+1;
                    if (!this.checkPosition(stopPieces, new Part(r0, c0))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r1, c1))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r2, c2))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r3, c3))){
                        return false;
                    }
                }
                break;
            case "Crossi":
                if(this.r===0){
                    let nRow = this.parts[1].row;
                    let nCol = this.parts[1].column;

                    //   0
                    // 2 1
                    // 3
                    let r0 = nRow;
                    let r1 = nRow;
                    let r2 = nRow-1;
                    let r3 = nRow-1;
                    let c0 = nCol+1;
                    let c1 = nCol;
                    let c2 = nCol;
                    let c3 = nCol-1;
                    if (!this.checkPosition(stopPieces, new Part(r0, c0))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r1, c1))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r2, c2))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r3, c3))){
                        return false;
                    }
                }else if(this.r===1){
                    let nRow = this.parts[1].row;
                    let nCol = this.parts[1].column;

                    // 3 2
                    //   1 0
                    //
                    let r0 = nRow+1;
                    let r1 = nRow;
                    let r2 = nRow;
                    let r3 = nRow-1;
                    let c0 = nCol;
                    let c1 = nCol;
                    let c2 = nCol+1;
                    let c3 = nCol+1;
                    if (!this.checkPosition(stopPieces, new Part(r0, c0))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r1, c1))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r2, c2))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r3, c3))){
                        return false;
                    }
                }else if(this.r===2){
                    let nRow = this.parts[1].row;
                    let nCol = this.parts[1].column;

                    //   3
                    // 1 2
                    // 0
                    let r0 = nRow;
                    let r1 = nRow;
                    let r2 = nRow+1;
                    let r3 = nRow+1;
                    let c0 = nCol-1;
                    let c1 = nCol;
                    let c2 = nCol;
                    let c3 = nCol+1;
                    if (!this.checkPosition(stopPieces, new Part(r0, c0))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r1, c1))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r2, c2))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r3, c3))){
                        return false;
                    }
                }else if(this.r===3){
                    let nRow = this.parts[1].row;
                    let nCol = this.parts[1].column;

                    // 0 1
                    //   2 3
                    //
                    let r0 = nRow-1;
                    let r1 = nRow;
                    let r2 = nRow;
                    let r3 = nRow+1;
                    let c0 = nCol;
                    let c1 = nCol;
                    let c2 = nCol-1;
                    let c3 = nCol-1;
                    if (!this.checkPosition(stopPieces, new Part(r0, c0))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r1, c1))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r2, c2))){
                        return false;
                    }else
                    if (!this.checkPosition(stopPieces, new Part(r3, c3))){
                        return false;
                    }
                }
                break;
        }
        return true;
    }



    // ROTATE
    // ROTATE
    // ROTATE
    // ROTATE
    // ROTATE
    rotate(stopPieces){

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
                case "Cross":
                    if(this.r===0){
                        let nRow = this.parts[1].row;
                        let nCol = this.parts[1].column;

                        // 0
                        // 1 2
                        //   3
                        this.parts[0].row = nRow;
                        this.parts[1].row = nRow;
                        this.parts[2].row = nRow+1;
                        this.parts[3].row = nRow+1;
                        this.parts[0].column = nCol+1;
                        this.parts[1].column = nCol;
                        this.parts[2].column = nCol;
                        this.parts[3].column = nCol-1;
                        this.r=1
                    }else if(this.r===1){
                        let nRow = this.parts[1].row;
                        let nCol = this.parts[1].column;

                        //
                        //   1 0
                        // 3 2
                        this.parts[0].row = nRow+1;
                        this.parts[1].row = nRow;
                        this.parts[2].row = nRow;
                        this.parts[3].row = nRow-1;
                        this.parts[0].column = nCol;
                        this.parts[1].column = nCol;
                        this.parts[2].column = nCol-1;
                        this.parts[3].column = nCol-1;
                        this.r=2
                    }else if(this.r===2){
                        let nRow = this.parts[1].row;
                        let nCol = this.parts[1].column;

                        // 3
                        // 2 1
                        //   0
                        this.parts[0].row = nRow;
                        this.parts[1].row = nRow;
                        this.parts[2].row = nRow-1;
                        this.parts[3].row = nRow-1;
                        this.parts[0].column = nCol-1;
                        this.parts[1].column = nCol;
                        this.parts[2].column = nCol;
                        this.parts[3].column = nCol+1;
                        this.r=3
                    }else if(this.r===3){
                        let nRow = this.parts[1].row;
                        let nCol = this.parts[1].column;

                        //   2 3
                        // 0 1
                        //
                        this.parts[0].row = nRow-1;
                        this.parts[1].row = nRow;
                        this.parts[2].row = nRow;
                        this.parts[3].row = nRow+1;
                        this.parts[0].column = nCol;
                        this.parts[1].column = nCol;
                        this.parts[2].column = nCol+1;
                        this.parts[3].column = nCol+1;
                        this.r=0
                    }
                    break;
                case "Crossi": //TODO: Cross(i) inverted piece rotation
                    if(this.r===0){
                        let nRow = this.parts[1].row;
                        let nCol = this.parts[1].column;

                        //   0
                        // 2 1
                        // 3
                        this.parts[0].row = nRow;
                        this.parts[1].row = nRow;
                        this.parts[2].row = nRow-1;
                        this.parts[3].row = nRow-1;
                        this.parts[0].column = nCol+1;
                        this.parts[1].column = nCol;
                        this.parts[2].column = nCol;
                        this.parts[3].column = nCol-1;
                        this.r=1
                    }else if(this.r===1){
                        let nRow = this.parts[1].row;
                        let nCol = this.parts[1].column;

                        // 3 2
                        //   1 0
                        //
                        this.parts[0].row = nRow+1;
                        this.parts[1].row = nRow;
                        this.parts[2].row = nRow;
                        this.parts[3].row = nRow-1;
                        this.parts[0].column = nCol;
                        this.parts[1].column = nCol;
                        this.parts[2].column = nCol+1;
                        this.parts[3].column = nCol+1;
                        this.r=2
                    }else if(this.r===2){
                        let nRow = this.parts[1].row;
                        let nCol = this.parts[1].column;

                        //   3
                        // 1 2
                        // 0
                        this.parts[0].row = nRow;
                        this.parts[1].row = nRow;
                        this.parts[2].row = nRow+1;
                        this.parts[3].row = nRow+1;
                        this.parts[0].column = nCol-1;
                        this.parts[1].column = nCol;
                        this.parts[2].column = nCol;
                        this.parts[3].column = nCol+1;
                        this.r=3
                    }else if(this.r===3){
                        let nRow = this.parts[1].row;
                        let nCol = this.parts[1].column;

                        // 0 1
                        //   2 3
                        //
                        this.parts[0].row = nRow-1;
                        this.parts[1].row = nRow;
                        this.parts[2].row = nRow;
                        this.parts[3].row = nRow+1;
                        this.parts[0].column = nCol;
                        this.parts[1].column = nCol;
                        this.parts[2].column = nCol-1;
                        this.parts[3].column = nCol-1;
                        this.r=0
                    }
                    break;
            }
        }

    }
}

let updateHandler;

let debugPieceCounter = 0;

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
        for (let j = 0; j < stopPieces[i].parts.length; j++) {
            let eId = "r"+ stopPieces[i].parts[j].row+"c"+ stopPieces[i].parts[j].column;
            let eGrid = document.getElementById(eId);

            if(eGrid !== null) {
                eGrid.style.backgroundColor = stopPieces[i].color;
                //eGrid.style.border = "1px solid red";
            }
        }
    }

    /*for (let i = 0; i < stopGrids.length; i++) {

        let eId = "r"+ stopGrids[i].row+"c"+ stopGrids[i].column;
        let eGrid = document.getElementById(eId);

        eGrid.style.backgroundColor = "red";
    }*/
    for (let i = 0; i < piece.parts.length; i++) {
        let eId = "r"+ piece.parts[i].row+"c"+ piece.parts[i].column;
        let eGrid = document.getElementById(eId);

        /*switch (i){
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
        }*/
        eGrid.style.backgroundColor = piece.color;
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
            clearLines();
            return true;
        }

        for (let j = 0; j < stopPieces.length; j++) {
            for (let k = 0; k < stopPieces[j].parts.length; k++) {
                if(stopPieces[j].parts[k].row === nextRow &&stopPieces[j].parts[k].column === nextColumn){
                    stopPieces[stopPieces.length] = piece;
                    makeMewPiece();
                    clearLines();
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
            for (let k = 0; k < stopPieces[j].parts.length; k++) {
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
            for (let k = 0; k < stopPieces[j].parts.length; k++) {
                if(piece.parts[i].column+1 === stopPieces[j].parts[k].column && piece.parts[i].row === stopPieces[j].parts[k].row ){
                    return false;
                }
            }
        }
    }
    return true;
}

function moveStopPiecesDown(delRow){
    for (let i = 0; i < stopPieces.length; i++) {
        for (let j = 0; j < stopPieces[i].parts.length; j++) {
            if(stopPieces[i].parts[j].row !== null){
                if(stopPieces[i].parts[j].row < delRow){
                    stopPieces[i].parts[j].row++;
                }

            }
        }
    }
}

function checkForFullLine(i){
    let partsToRemove = [new Part(0,0),new Part(0,0),new Part(5,5),new Part(6,6)];

    let counter = 0;

        for (let j = 0; j < columns; j++) {
            for (let k = 0; k < stopPieces.length; k++) {
                for (let l = 0; l < stopPieces[k].parts.length; l++) {
                    if(stopPieces[k].parts[l].row === i && stopPieces[k].parts[l].column === j){
                        partsToRemove[counter] = stopPieces[k].parts[l];
                        counter++;
                    }
                }
            }
        }

    if(counter===columns){
        return partsToRemove;
    }
    return false;
}

function clearLines(){

    for (let i = rows-1; i > 0; i--) {

        let partsToRemove = checkForFullLine(i);
        if(partsToRemove === false){
            continue;
        }
        let delRow = 0;
        for (let j = 0; j < partsToRemove.length; j++) {
            for (let k = 0; k < stopPieces.length; k++) {
                for (let l = 0; l < stopPieces[k].parts.length; l++) {
                    if(stopPieces[k].parts[l].row === partsToRemove[j].row && stopPieces[k].parts[l].column === partsToRemove[j].column){
                        stopPieces[k].parts[l] = new Part(null, null);
                        delRow = partsToRemove[j].row;
                    }
                }

            }
        }
        moveStopPiecesDown(delRow);

    }
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
    //clearLines();
}

function makeMewPiece(){

    let randomPiece = Math.floor(Math.random() * 7);
    let randomOffset = Math.floor(Math.random()*(columns-1));
    piece = new Piece(randomOffset);

    //console.log("Piece:" + randomPiece);
    //console.log("Offset:" + randomOffset);

    switch (randomPiece){
        case 0:
            console.log("Spawining Square");
            piece.Square();
            break;
        case 1:
            console.log("Spawining Long");
            piece.Long();
            break;
        case 2:
            console.log("Spawining T");
            piece.T();
            break;
        case 3:
            console.log("Spawining L");
            piece.L();
            break;
        case 4:
            console.log("Spawining L (i)");
            piece.Li();
            break;
        case 5:
            console.log("Spawining Cross");
            piece.Cross();
            break;
        case 6:
            console.log("Spawining Cross (i)");
            piece.Crossi();
            break;

    }


    debugPieceCounter++;
}

function initGrid(){
    let html = "";
    let rows = 22;
    let columns  = 10;

    for (let i=0; i<rows; i++){
        for (let j=0; j<columns; j++){

        let gridId = "r"+i+"c"+j;
        html = html + "<div id='"+gridId+"' class='grid'></div>";

        }
        html = html + "<br>";
    }
    let gameDOM = document.getElementById("game");
    html = html + gameDOM.innerHTML;
    gameDOM.innerHTML = html;
}

function start(){

    initGrid();

    stopPieces = [new Piece()];
    stopGrids = [new Grid(rows-1, 0),new Grid(rows-1, 1),new Grid(rows-1, 2),new Grid(rows-1, 3),new Grid(rows-1, 4),new Grid(rows-1, 5),new Grid(rows-1, 6),new Grid(rows-1, 7),new Grid(rows-1, 8),new Grid(rows-1, 9)];

    makeMewPiece();

    updateHandler = setInterval(updateAsync, 150);

    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let rotate = document.getElementById("rotate");

    left.addEventListener("click", movePieceLeft);
    right.addEventListener("click", movePieceRight);
    rotate.addEventListener("click", rotatePiece);
    console.log("Loaded main.js");

    let startButton = document.getElementById("start");
    startButton.remove();
}

function main(){
    let startButton = document.getElementById("start");
    startButton.addEventListener("click", start);
}
window.addEventListener("load", main);
