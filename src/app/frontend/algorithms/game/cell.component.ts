export class Cell {
    row: number;
    col: number;
    status: 'isStart' | 'isFinnish' ;

    constructor(row: number,col: number){
        this.row=row;
        this.col=col;
    }
}