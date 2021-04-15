import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicSessionAddComponent } from './academic-session-add.component';

describe('AcademicSessionAddComponent', () => {
  let component: AcademicSessionAddComponent;
  let fixture: ComponentFixture<AcademicSessionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicSessionAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicSessionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
