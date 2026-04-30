import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { TodoService } from './todo-service';
import { Todo, Todos } from '../models/todo';
import { environment } from '../../../../environments/environment';

describe('TodoService', () => {
  let service: TodoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(TodoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all todos', () => {
    const mockTodos: Todos = [
      { id: 1, title: 'First todo', completed: false, userId: 1 },
      { id: 2, title: 'Second todo', completed: true, userId: 1 },
    ];

    service.findAll().subscribe((todos) => {
      expect(todos).toEqual(mockTodos);
    });

    const req = httpTestingController.expectOne(environment.urlTodos);
    expect(req.request.method).toBe('GET');
    req.flush(mockTodos);
  });

  it('should delete a todo by id', () => {
    const todoToDelete: Todo = { id: 10, title: 'Delete me', completed: false };

    service.delete(todoToDelete).subscribe((response) => {
      expect(response).toBeNull();
    });

    const req = httpTestingController.expectOne(`${environment.urlTodos}/${todoToDelete.id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });

  it('should save a todo with JSON content type header', () => {
    const newTodo: Todo = { title: 'New todo', completed: false, userId: 1 };
    const createdTodo: Todo = { id: 42, ...newTodo };

    service.save(newTodo).subscribe((todo) => {
      expect(todo).toEqual(createdTodo);
    });

    const req = httpTestingController.expectOne(environment.urlTodos);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newTodo);
    expect(req.request.headers.get('Content-Type')).toBe('application/json');
    req.flush(createdTodo);
  });
});
