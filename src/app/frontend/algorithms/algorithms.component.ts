import { Component, OnInit } from '@angular/core';
import { Board} from './game/board.component';
import { BreathFirstSearch } from './game/breathFirstSearch.component';
import { timer } from 'rxjs';

@Component({
  selector: 'pm-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.scss']
})
export class AlgorithmsComponent implements OnInit {
  title = 'Algorithms';
  board = new Board(20, 40);
  mouseIsPressed = false;
  

  constructor() {}

  handleMouseDown(row,col){}

  handleMousEnter(row,col){}

  handleMousUp(row,col){}

  runBFS(){
    const sleep = ( ms ) => {
      const end = +(new Date()) + ms;
      while( +(new Date()) < end ){ } 
    }
    const results = BreathFirstSearch.run(this.board);
    for(let result of results){
      console.log("changing r:"+result.row+" c:"+result.col+" to display");
      //sleep(40);
      setTimeout(()=>{ result.status = 'display'; }, 30);
      // result.status = 'display';
    }
    console.log("total visited:"+results.length);
  }


  ngOnInit(): void {
  }

}
