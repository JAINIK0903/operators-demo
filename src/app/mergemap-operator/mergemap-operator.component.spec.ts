import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergemapOperatorComponent } from './mergemap-operator.component';

describe('MergemapOperatorComponent', () => {
  let component: MergemapOperatorComponent;
  let fixture: ComponentFixture<MergemapOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergemapOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergemapOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
