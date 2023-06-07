import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharereplayOperatorComponent } from './sharereplay-operator.component';

describe('SharereplayOperatorComponent', () => {
  let component: SharereplayOperatorComponent;
  let fixture: ComponentFixture<SharereplayOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharereplayOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharereplayOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
