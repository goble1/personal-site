export class Cell {
    row: number;
    col: number;
    status: 'visited' | 'void' | 'display';
    isStart: boolean;
    isFinnish: boolean;

    constructor(row: number,col: number){
        this.row=row;
        this.col=col;
    }
}