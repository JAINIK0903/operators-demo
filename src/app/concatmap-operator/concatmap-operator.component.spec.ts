import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatmapOperatorComponent } from './concatmap-operator.component';

describe('ConcatmapOperatorComponent', () => {
  let component: ConcatmapOperatorComponent;
  let fixture: ComponentFixture<ConcatmapOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatmapOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcatmapOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
