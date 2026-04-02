import { TestBed } from '@angular/core/testing';

import { TodosEffect } from './todos-effect';

describe('TodosEffect', () => {
  let service: TodosEffect;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosEffect);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
