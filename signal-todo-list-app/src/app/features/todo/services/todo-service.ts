import { HttpClient, HttpHeaders } from '@angular/common/http';
import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';
import { Todo, Todos } from '../models/todo';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly todoSignal: WritableSignal<Todos> = signal<Todos>([]);
  readonly todos = this.todoSignal.asReadonly();

  readonly completedTodos = computed(() => this.todoSignal().filter((t) => t.completed));
  readonly pendingTodos = computed(() => this.todoSignal().filter((t) => !t.completed));

  private http: HttpClient = inject(HttpClient);

  readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  loadAll(): void {
    this.http.get<Todos>(environment.urlTodos).subscribe((todos) => this.todoSignal.set(todos));
  }

  delete(todo: Todo): void {
    const url = `${environment.urlTodos}/${todo.id}`;
    // this.http.delete<void>(url).subscribe(()=>{
    //   this.todoSignal.update(todos=> todos.filter(t => t.id != todo.id))
    // })

    // this.http.delete<void>(url).pipe(
    //   switchMap(()=>this.http.get<Todos>(environment.urlTodos))
    // ).subscribe(todos=> this.todoSignal.set(todos))

    this.http.delete<void>(url).subscribe(() => this.loadAll());
  }

  save(todo: Todo): void {
    this.http
      .post<Todo>(environment.urlTodos, todo, this.httpOptions)
      .subscribe((newTodo: Todo) => {
        this.todoSignal.update((todos) => [...todos, newTodo]);
      });
  }
}
