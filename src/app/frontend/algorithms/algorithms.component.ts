import { Component, OnInit } from '@angular/core';
import { Cell } from './game/cell.component';
import { Board} from './game/board.component';

@Component({
  selector: 'pm-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.scss']
})
export class AlgorithmsComponent implements OnInit {
  title = "Algorithms"
  board = new Board(20,40);
  mouseIsPressed = false;

  constructor() {}

  handleMouseDown(row,col){}

  handleMousEnter(row,col){}

  handleMousUp(row,col){}



  ngOnInit(): void {
  }

}
