import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo';
import { JsonPipe } from '@angular/common';
import { TodoService } from '../../services/todo-service';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule,JsonPipe],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css',
})
export class TodoForm {
  todoService = inject(TodoService);
  todoFormModel:Todo={
    title:"",
    completed:false
  }
  submitTodo(){
    this.todoService.save(this.todoFormModel);
  }
}
