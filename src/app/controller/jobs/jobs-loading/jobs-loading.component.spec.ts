import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsLoadingComponent } from './jobs-loading.component';

describe('JobsLoadingComponent', () => {
  let component: JobsLoadingComponent;
  let fixture: ComponentFixture<JobsLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobsLoadingComponent]
    });
    fixture = TestBed.createComponent(JobsLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
