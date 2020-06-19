import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuleDetailComponent } from './articule-detail.component';

describe('ArticuleDetailComponent', () => {
  let component: ArticuleDetailComponent;
  let fixture: ComponentFixture<ArticuleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
