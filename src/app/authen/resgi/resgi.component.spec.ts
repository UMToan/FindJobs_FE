import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgiComponent } from './resgi.component';

describe('ResgiComponent', () => {
  let component: ResgiComponent;
  let fixture: ComponentFixture<ResgiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResgiComponent]
    });
    fixture = TestBed.createComponent(ResgiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
