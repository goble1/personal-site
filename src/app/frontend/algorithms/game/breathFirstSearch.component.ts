import { Cell } from './cell.component';
import { Board } from './board.component';


export class BreathFirstSearch {
    static rm = [0,1,0,-1];
    static cm = [1,0,-1,0];

    static run(b:Board){
         const queue: Cell[] = [];
         const results: Cell[] = [];
         queue.push(b.start);
         results.push(b.start);
         qLoop: while(queue.length > 0){
            const cur = queue.shift()!;
            for(var _i = 0; _i < 4; _i++){
                const r = this.rm[_i] + cur.row;
                const c = this.cm[_i] + cur.col;
                if(r<0||c<0||r==b.rows||c==b.cols||b.cells[r][c].status === 'visited' || b.cells[r][c].isStart) continue;
                queue.push(b.cells[r][c]);
                results.push(b.cells[r][c]);
                if(b.cells[r][c].isFinnish) break qLoop;
                b.cells[r][c].status = 'visited';
            }
         }
         return results;

    }
}