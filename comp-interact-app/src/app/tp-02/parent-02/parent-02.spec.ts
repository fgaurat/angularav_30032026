import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent02 } from './parent-02';

describe('Parent02', () => {
  let component: Parent02;
  let fixture: ComponentFixture<Parent02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parent02]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parent02);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
