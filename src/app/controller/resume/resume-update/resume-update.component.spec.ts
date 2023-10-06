import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeUpdateComponent } from './resume-update.component';

describe('ResumeUpdateComponent', () => {
  let component: ResumeUpdateComponent;
  let fixture: ComponentFixture<ResumeUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeUpdateComponent]
    });
    fixture = TestBed.createComponent(ResumeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
