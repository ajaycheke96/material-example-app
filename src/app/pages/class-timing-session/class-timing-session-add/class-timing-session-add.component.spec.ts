import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTimingSessionAddComponent } from './class-timing-session-add.component';

describe('ClassTimingSessionAddComponent', () => {
  let component: ClassTimingSessionAddComponent;
  let fixture: ComponentFixture<ClassTimingSessionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassTimingSessionAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTimingSessionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
