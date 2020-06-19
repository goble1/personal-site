import { Component, OnInit} from '@angular/core';

import { ArticuleService } from 'src/app/shared/articule.service';
import { IArticule } from 'src/app/shared/articules';

@Component({
  //selector: 'pm-math-list', dont need selector because of routing
  templateUrl: './math-list.component.html',
  styleUrls: ['./math-list.component.css']
})
export class MathListComponent implements OnInit{
  pageTitle = 'Math Articules';
  imageWidth = 50;
  imageMargin = 2;
  errorMessage: string;


  _listFilter = ''; //underscore shows it's a private property
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    this.filteredArticules = this.listFilter? this.performFilter(this.listFilter): this.articules;
  }
  filteredArticules: IArticule[];
 

  articules: IArticule[] = [];

  constructor(private articuleService: ArticuleService) {
  }

  performFilter(filterBy: string): IArticule[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.articules.filter((articule: IArticule) =>
      articule.Name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void { // called after constructor
    this.articuleService.getArticules().subscribe({
      next: articules => {
        this.articules = articules;
        this.filteredArticules = this.articules;
      },
      error: err => this.errorMessage = err
    });
    
  }

}
