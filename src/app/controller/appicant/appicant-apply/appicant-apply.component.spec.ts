import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppicantApplyComponent } from './appicant-apply.component';

describe('AppicantApplyComponent', () => {
  let component: AppicantApplyComponent;
  let fixture: ComponentFixture<AppicantApplyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppicantApplyComponent]
    });
    fixture = TestBed.createComponent(AppicantApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
