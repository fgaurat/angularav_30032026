import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from '../services/todo-service';
import { deleteTodo, deleteTodoSuccess, loadTodos, loadTodoSuccess } from '../actions/todo.actions';
import { catchError, map, switchMap, tap } from 'rxjs';
import { Todos } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosEffect {
  private actions$ = inject(Actions);
  private todoService = inject(TodoService);

  loadTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadTodos),
      switchMap(() => this.todoService.findAll()),
      map((todos: Todos) => loadTodoSuccess(todos)),
      //catchError(()=>loadTodoError())
    );
  });

  deleteTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteTodo),
      tap((action: ReturnType<typeof deleteTodo>) => {
        this.todoService.delete(action.todo).subscribe();
      }),
      map((action: ReturnType<typeof deleteTodo>) => deleteTodoSuccess(action.todo)),
    );
  });
}
