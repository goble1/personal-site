import { Cell } from "./cell.component";

export class Board {
    cells: Cell[][] = []; // how you initialize an empty array
    size: number;
    remainingCells = 0;

    //Count neighboring minds and
    rm = [-1,-1,-1,1,1,1,0,0];
    cm = [-1,0,1,-1,0,1,-1,1];

    constructor(size: number, mines: number) {
        this.size = size;
        for(let r=0;r<size;r++){
            this.cells[r] = []; // initialize the row
            for(let c=0;c<size;c++){
                this.cells[r][c] = new Cell(r,c);
            }
        }

        // assign mines
        for(let i=0;i<mines;i++){
            this.getRandomCell().mine = true;
        }

        //assign proximityminds and total number of cells
        for(let r=0;r<size;r++){
            for(let c=0;c<size;c++){
                let nearByMinds = 0;
                if(!this.cells[r][c].mine)this.remainingCells++;
                for(let i=0;i<8;i++){
                    if( r+this.rm[i] >= 0 && 
                        r+this.rm[i]< size &&
                        c+this.cm[i]>=0 &&
                        c+this.cm[i]<size &&
                        this.cells[r+this.rm[i]][c+this.cm[i]].mine) nearByMinds++;
                }
                this.cells[r][c].proximityMines=nearByMinds;
            }
        }
        
    }

    getRandomCell(): Cell {
        const r = Math.floor(Math.random()*this.cells.length);
        const c = Math.floor(Math.random()*this.cells[r].length);
        return this.cells[r][c];
    }

    checkCell(cell: Cell): 'gameover' | 'win' | null{ // you are specifying a return of either gameover or null
        if(cell.status !== "open") {
            return;
        } else if (cell.mine){
            this.revealAll()
            return 'gameover'
        } else {
            cell.status = 'clear';
            if(cell.proximityMines === 0){
                console.log("found zero");
                for (let i = 0 ; i < 8 ; i++){
                    let r = cell.row + this.rm[i];
                    let c = cell.col + this.cm[i];
                    console.log("trying cel:"+cell.row +","+cell.col);
                    if ( r >= 0 && r < this.size && c >= 0 && c < this.size) {
                        console.log("trying cel:"+r+","+c);
                        this.checkCell(this.cells[r][c]);
                    }
                }
            }
            if(this.remainingCells-- ===1) return 'win';
            return null;
        }
    }

    flag(cell: Cell){
        if(cell.status === 'open') cell.status = 'flag';
        else if (cell.status === 'flag') cell.status = 'open';
    }

    revealAll(){
        for(let row of this.cells){
            for(let cell of row){
                if(cell.mine) cell.status='mine';
                else cell.status='clear';
            }
        }
    }
}