import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetKpiComponent } from './planet-kpi.component';

describe('PlanetKpiComponent', () => {
  let component: PlanetKpiComponent;
  let fixture: ComponentFixture<PlanetKpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetKpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
