import { AfterViewInit, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Todo, Todos } from '../../models/todo';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo-service';
import { EMPTY, filter, merge, Observable, switchMap, tap } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule, AsyncPipe, JsonPipe],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList{
  todoService = inject(TodoService);
  readonly todos = this.todoService.todos
  readonly completedTodos = this.todoService.completedTodos
  readonly pendingTodos = this.todoService.pendingTodos


  constructor() {
    this.todoService.loadAll()
  }

  delete(todo:Todo){
    this.todoService.delete(todo)
  }
}
