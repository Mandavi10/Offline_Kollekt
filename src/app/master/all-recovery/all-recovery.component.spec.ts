import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecoveryComponent } from './all-recovery.component';

describe('AllRecoveryComponent', () => {
  let component: AllRecoveryComponent;
  let fixture: ComponentFixture<AllRecoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRecoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
