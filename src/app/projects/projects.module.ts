import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module'; // any thing you want shared from the root module

import { ProjectListComponent } from './project-list.component';



@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'projects', component: ProjectListComponent}
    ])
  ],
  declarations: [
    ProjectListComponent,
  ],
  exports: [
    FormsModule,
  ]
})

export class ProjectsModule {}
