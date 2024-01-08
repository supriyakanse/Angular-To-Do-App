import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTODOComponent } from './dashboard-todo.component';

describe('DashboardTODOComponent', () => {
  let component: DashboardTODOComponent;
  let fixture: ComponentFixture<DashboardTODOComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardTODOComponent]
    });
    fixture = TestBed.createComponent(DashboardTODOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
