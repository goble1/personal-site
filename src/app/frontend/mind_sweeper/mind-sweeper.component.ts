import { Component } from '@angular/core';

import { Cell } from './game/cell.component';
import { Board} from './game/board.component';
import { trigger } from '@angular/animations';



@Component({
  selector: 'mindSweeper', // shouldn't need since we are routing to it
  templateUrl: './mind-sweeper.component.html',
  styleUrls: ['./mind-sweeper.component.scss']
})
export class MindSweeperComponent {
  title = 'Mine Sweeper';
  board = new Board(10,10);


  checkCell(cell:Cell){
    const result = this.board.checkCell(cell);
    if(result === 'gameover') alert('you lose');
    else if (result === 'win') alert ('you win');
  }

  flag(cell:Cell){
    this.board.flag(cell);
  }

  restartBoard(){
    this.board = new Board(4,4);
  }
}
