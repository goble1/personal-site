import { Cell } from "./cell.component";

export class Board {
    cells: Cell[][] = []; // how you initialize an empty array
    rows: number;
    cols: number;
    remainingCells = 0;

    //Count neighboring minds and
    rm = [-1,-1,-1,1,1,1,0,0];
    cm = [-1,0,1,-1,0,1,-1,1];

    constructor(r: number, c: number) {
        this.rows = r;
        this.cols = c;
        for(let r=0;r<this.rows;r++){
            this.cells[r] = []; // initialize the row
            for(let c=0;c<this.cols;c++){
                this.cells[r][c] = new Cell(r,c);
            }
        }

        this.cells[10][5].status = 'isStart';
        this.cells[10][34].status = 'isFinnish';
    }
}