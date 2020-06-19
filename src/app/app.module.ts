import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }  from '@angular/router';
import { ProjectsModule } from './projects/projects.module';

import { AppComponent } from './app.component';
import { MathListComponent } from './math/math-list.component';
import { ArticuleDetailComponent } from './articules/articule-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ArticuleDetailGuard } from './articules/articule-detail.guard';




@NgModule({
  declarations: [
    AppComponent,
    MathListComponent,
    ArticuleDetailComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProjectsModule,
    RouterModule.forRoot([
      { path: 'articules', component: MathListComponent },
      { path: 'articules/:id', 
        canActivate: [ArticuleDetailGuard],
        component: ArticuleDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' } // usuall designed to show a 404 page
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
