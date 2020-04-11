import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarEnergyComponent } from './solarEnergy.component';

describe('NotificationsComponent', () => {
  let component: SolarEnergyComponent;
  let fixture: ComponentFixture<SolarEnergyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolarEnergyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
