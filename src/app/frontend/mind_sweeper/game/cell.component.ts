export class Cell {
    row: number;
    col: number;
    status: 'open' | 'clear' | 'mine' | 'flag' = 'open';
    mine = false; // whether or not its a mine
    proximityMines: number = 0;
    constructor(row: number,col: number){
        this.row=row;
        this.col=col;
        console.log("creating cell"+this.row+","+this.col);
    }
}