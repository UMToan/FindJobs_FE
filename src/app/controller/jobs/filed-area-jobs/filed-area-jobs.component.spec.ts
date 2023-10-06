import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiledAreaJobsComponent } from './filed-area-jobs.component';

describe('FiledAreaJobsComponent', () => {
  let component: FiledAreaJobsComponent;
  let fixture: ComponentFixture<FiledAreaJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiledAreaJobsComponent]
    });
    fixture = TestBed.createComponent(FiledAreaJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
