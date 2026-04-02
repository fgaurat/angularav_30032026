import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent03 } from './parent-03';

describe('Parent03', () => {
  let component: Parent03;
  let fixture: ComponentFixture<Parent03>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parent03]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parent03);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
