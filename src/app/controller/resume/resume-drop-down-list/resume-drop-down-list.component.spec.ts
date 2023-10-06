import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeDropDownListComponent } from './resume-drop-down-list.component';

describe('ResumeDropDownListComponent', () => {
  let component: ResumeDropDownListComponent;
  let fixture: ComponentFixture<ResumeDropDownListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeDropDownListComponent]
    });
    fixture = TestBed.createComponent(ResumeDropDownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
