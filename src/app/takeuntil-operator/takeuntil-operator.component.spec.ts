import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeuntilOperatorComponent } from './takeuntil-operator.component';

describe('TakeuntilOperatorComponent', () => {
  let component: TakeuntilOperatorComponent;
  let fixture: ComponentFixture<TakeuntilOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeuntilOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeuntilOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
