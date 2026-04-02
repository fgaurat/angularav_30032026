import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo-service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './todo-reactive-form.html',
  styleUrl: './todo-reactive-form.css',
})
export class TodoReactiveForm {
  todoService = inject(TodoService);
  private fb:FormBuilder = inject(FormBuilder)

  todoForm = this.fb.group({
    title:['',Validators.required],
    completed:[false]
  })


  submitTodo(){
    this.todoService.save(this.todoForm.value as Todo)
  }

  get isTitleValid(){
    return (this.todoForm.get('title')?.invalid && this.todoForm.get('title')?.touched)

  }

  // set isTitleValid(value){

  // }

}
