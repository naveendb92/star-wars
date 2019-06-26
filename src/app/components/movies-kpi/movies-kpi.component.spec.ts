import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesKpiComponent } from './movies-kpi.component';

describe('MoviesKpiComponent', () => {
  let component: MoviesKpiComponent;
  let fixture: ComponentFixture<MoviesKpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesKpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
