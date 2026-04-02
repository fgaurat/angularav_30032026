import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child03 } from './child-03';

describe('Child03', () => {
  let component: Child03;
  let fixture: ComponentFixture<Child03>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child03]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child03);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
