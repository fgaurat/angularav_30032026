import { AfterViewInit, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Todo, Todos } from '../../models/todo';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo-service';
import { EMPTY, filter, merge, Observable, switchMap, tap } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { deleteTodo, loadTodos } from '../../actions/todo.actions';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule, AsyncPipe, JsonPipe],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList implements OnInit{

  private store = inject(Store)
  todos$:Observable<Todos> = this.store.select(state=>state.todoList)

  constructor() {
  }

  ngOnInit(): void {
    this.store.dispatch(loadTodos())
  }

  delete(todo:Todo){

    this.store.dispatch(deleteTodo(todo))
  }
}
