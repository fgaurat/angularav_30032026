import { AfterViewInit, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Todo, Todos } from '../../models/todo';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo-service';
import { EMPTY, filter, merge, Observable, switchMap, tap } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { MessageQueue } from '../../../../core/services/message-queue';
import { Action } from '../../../../core/models/action';
import { Actions } from '../../../../core/enums/actions';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule, AsyncPipe, JsonPipe],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList implements AfterViewInit{
  messageQueue = inject(MessageQueue);

  todoService = inject(TodoService);
  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  todos$: Observable<Todos>= EMPTY;

  // todos:Todos=[]
  constructor() {
    const new$: Observable<Todo> = this.messageQueue.bus$.pipe(
      filter((action: Action) => action.type === Actions.NEW_TODO),
      switchMap((action) => this.todoService.save(action.payload)),
    );

    const delete$: Observable<void> = this.messageQueue.bus$.pipe(
      filter((action: Action) => action.type === Actions.DELETE_TODO),
      switchMap((action) => this.todoService.delete(action.payload)),
    );

    const load$: Observable<Action> = this.messageQueue.bus$.pipe(
      filter((action: Action) => action.type === Actions.LOAD_TODOS),
    );

    this.todos$ = merge(new$, delete$, load$).pipe(
      switchMap((action) => this.todoService.findAll()),
    );
  }
  ngAfterViewInit(): void {
    this.messageQueue.dispatch({type:Actions.LOAD_TODOS})
  }


  // #region old
  // constructor(){
  //   this.todoService.findAll().subscribe((data:Todos )=> {
  //     this.todos = data
  //     this.changeDetectorRef.markForCheck()
  //   })
  // }

  // values: string[] = [];
  // add() {
  //   setTimeout(() => {
  //     this.values.push('values');
  //     this.changeDetectorRef.markForCheck();
  //   }, 200);
  // }
  // #endregion

  delete(todo: Todo) {

    this.messageQueue.dispatch({type:Actions.DELETE_TODO,payload:todo})

    // this.todoService.delete(todo).subscribe(() => {
    //   this.todos$ = this.todoService.findAll();
    //   this.changeDetectorRef.markForCheck();
    // });
  }
}
