import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicSessionEditComponent } from './academic-session-edit.component';

describe('AcademicSessionEditComponent', () => {
  let component: AcademicSessionEditComponent;
  let fixture: ComponentFixture<AcademicSessionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicSessionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicSessionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
