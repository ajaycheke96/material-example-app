import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTimingSessionEditComponent } from './class-timing-session-edit.component';

describe('ClassTimingSessionEditComponent', () => {
  let component: ClassTimingSessionEditComponent;
  let fixture: ComponentFixture<ClassTimingSessionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassTimingSessionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTimingSessionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
