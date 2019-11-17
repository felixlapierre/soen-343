import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRequestCreateComponent } from './customer-request-create.component';

describe('CustomerRequestCreateComponent', () => {
  let component: CustomerRequestCreateComponent;
  let fixture: ComponentFixture<CustomerRequestCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerRequestCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRequestCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
