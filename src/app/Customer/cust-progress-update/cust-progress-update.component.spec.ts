import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustProgressUpdateComponent } from './cust-progress-update.component';

describe('CustProgressUpdateComponent', () => {
  let component: CustProgressUpdateComponent;
  let fixture: ComponentFixture<CustProgressUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustProgressUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustProgressUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
