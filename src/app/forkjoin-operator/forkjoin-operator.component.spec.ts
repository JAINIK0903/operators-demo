import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkjoinOperatorComponent } from './forkjoin-operator.component';

describe('ForkjoinOperatorComponent', () => {
  let component: ForkjoinOperatorComponent;
  let fixture: ComponentFixture<ForkjoinOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForkjoinOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForkjoinOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
