import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicSessionListComponent } from './academic-session-list.component';

describe('AcademicSessionListComponent', () => {
  let component: AcademicSessionListComponent;
  let fixture: ComponentFixture<AcademicSessionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicSessionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicSessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
