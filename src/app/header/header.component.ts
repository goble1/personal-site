import { Component, OnInit } from '@angular/core';
import { SizeClassService } from 'src/app/services/size-class.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  collapseNav = true;
  viewportSmall = true;

  constructor(
    private sizeClassService: SizeClassService,
  ) { }

  toggleMenu() {
    this.collapseNav = !this.collapseNav;
    this.sizeClassService.collapseNavigation.next(this.collapseNav);
  }

  ngOnInit(): void {
    this.sizeClassService.isBreakpointSmall()
      .subscribe((small) => {
        this.viewportSmall = small;
      });
  }
}
