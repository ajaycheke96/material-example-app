import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallLogEditComponent } from './call-log-edit.component';

describe('CallLogEditComponent', () => {
  let component: CallLogEditComponent;
  let fixture: ComponentFixture<CallLogEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallLogEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallLogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
