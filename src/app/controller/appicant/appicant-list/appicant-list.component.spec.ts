import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppicantListComponent } from './appicant-list.component';

describe('AppicantListComponent', () => {
  let component: AppicantListComponent;
  let fixture: ComponentFixture<AppicantListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppicantListComponent]
    });
    fixture = TestBed.createComponent(AppicantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
