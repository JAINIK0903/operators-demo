import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatWithOperatorComponent } from './concat-with-operator.component';

describe('ConcatWithOperatorComponent', () => {
  let component: ConcatWithOperatorComponent;
  let fixture: ComponentFixture<ConcatWithOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatWithOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcatWithOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
