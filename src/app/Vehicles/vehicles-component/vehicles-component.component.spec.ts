import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesComponentComponent } from './vehicles-component.component';

describe('VehiclesComponentComponent', () => {
  let component: VehiclesComponentComponent;
  let fixture: ComponentFixture<VehiclesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
