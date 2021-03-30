import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDaysAndHoursComponent } from './openDaysAndHours.component';

describe('EtudiantsComponent', () => {
  let component: OpenDaysAndHoursComponent;
  let fixture: ComponentFixture<OpenDaysAndHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenDaysAndHoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenDaysAndHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
