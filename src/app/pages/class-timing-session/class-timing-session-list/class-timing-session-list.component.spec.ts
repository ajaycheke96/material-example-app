import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTimingSessionListComponent } from './class-timing-session-list.component';

describe('ClassTimingSessionListComponent', () => {
  let component: ClassTimingSessionListComponent;
  let fixture: ComponentFixture<ClassTimingSessionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassTimingSessionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTimingSessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
