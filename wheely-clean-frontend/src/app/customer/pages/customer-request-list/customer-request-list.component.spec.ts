import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRequestListComponent } from './customer-request-list.component';

describe('CustomerRequestListComponent', () => {
  let component: CustomerRequestListComponent;
  let fixture: ComponentFixture<CustomerRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
