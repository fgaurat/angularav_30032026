import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child02 } from './child-02';

describe('Child02', () => {
  let component: Child02;
  let fixture: ComponentFixture<Child02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child02]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child02);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
