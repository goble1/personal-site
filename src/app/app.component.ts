import { Component } from '@angular/core';
import { slideInAnimation } from './animation.component';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'Craig Goble';
}
