import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsTypeDropDownListComponent } from './jobs-type-drop-down-list.component';

describe('JobsTypeDropDownListComponent', () => {
  let component: JobsTypeDropDownListComponent;
  let fixture: ComponentFixture<JobsTypeDropDownListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobsTypeDropDownListComponent]
    });
    fixture = TestBed.createComponent(JobsTypeDropDownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
