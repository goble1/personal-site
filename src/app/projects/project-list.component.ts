import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-project-list', //dont need a selector since we route to it
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
