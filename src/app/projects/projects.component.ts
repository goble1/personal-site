import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module'; // any thing you want shared from the root module
import { RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'projects', component: ProjectListComponent}
    ])
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule
  ]
})

export class ProjectsComponent {}
