import { Component, OnInit } from '@angular/core';
import { IArticule } from 'src/app/shared/articules';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticuleService } from 'src/app/shared/articule.service';

@Component({//no selector since getting through this page will be through angular routing
  templateUrl: './articule-detail.component.html',
  styleUrls: ['./articule-detail.component.scss']
})
export class ArticuleDetailComponent implements OnInit {
  pageTitle: string = 'Articule Detail';
  articule: IArticule;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private articuleService: ArticuleService) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  onBack(): void {
    this.router.navigate(['/articules']);
  }

  getProduct(id: number) {
    this.articuleService.getArticule(id).subscribe({
      next: articule => this.articule = articule,
      error: err => this.errorMessage = err
    });
  }

}
