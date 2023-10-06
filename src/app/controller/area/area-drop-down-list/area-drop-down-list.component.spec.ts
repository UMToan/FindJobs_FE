import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDropDownListComponent } from './area-drop-down-list.component';

describe('AreaDropDownListComponent', () => {
  let component: AreaDropDownListComponent;
  let fixture: ComponentFixture<AreaDropDownListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaDropDownListComponent]
    });
    fixture = TestBed.createComponent(AreaDropDownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
