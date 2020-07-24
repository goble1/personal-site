import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { SharedModule } from 'src/app/shared/shared.module'; // any thing you want shared from the root module

import { ProjectListComponent } from './project-list.component';
import { MindSweeperComponent } from '@app/frontend/mind_sweeper/mind-sweeper.component';
import { CommonModule } from '@angular/common';
import { AlgorithmsComponent } from '@app/frontend/algorithms/algorithms.component';






@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    DragDropModule,
    RouterModule.forChild([
      { path: 'projects', component: ProjectListComponent},
      { path: 'project/minesweeper', component: MindSweeperComponent},
      { path: 'project/algorithms', component: AlgorithmsComponent}
    ])
  ],
  declarations: [
    ProjectListComponent,
    MindSweeperComponent,
    AlgorithmsComponent
  ],
  exports: [
    FormsModule,
  ]
})

export class ProjectsModule {}
