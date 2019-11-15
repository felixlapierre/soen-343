import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanerRequestListComponent } from './cleaner-request-list.component';

describe('CleanerRequestListComponent', () => {
  let component: CleanerRequestListComponent;
  let fixture: ComponentFixture<CleanerRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanerRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanerRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
