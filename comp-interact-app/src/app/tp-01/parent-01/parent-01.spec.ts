import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent01 } from './parent-01';

describe('Parent01', () => {
  let component: Parent01;
  let fixture: ComponentFixture<Parent01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parent01]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parent01);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
