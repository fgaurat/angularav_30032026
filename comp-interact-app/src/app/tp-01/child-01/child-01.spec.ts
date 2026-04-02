import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child01 } from './child-01';

describe('Child01', () => {
  let component: Child01;
  let fixture: ComponentFixture<Child01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child01]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child01);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
