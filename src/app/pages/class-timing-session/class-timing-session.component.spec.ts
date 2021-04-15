import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTimingSessionComponent } from './class-timing-session.component';

describe('ClassTimingSessionComponent', () => {
  let component: ClassTimingSessionComponent;
  let fixture: ComponentFixture<ClassTimingSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassTimingSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTimingSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
