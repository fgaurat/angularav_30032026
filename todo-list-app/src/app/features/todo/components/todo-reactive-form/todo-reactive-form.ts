import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageQueue } from '../../../../core/services/message-queue';
import { Actions } from '../../../../core/enums/actions';

@Component({
  selector: 'app-todo-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './todo-reactive-form.html',
  styleUrl: './todo-reactive-form.css',
})
export class TodoReactiveForm {

  private fb:FormBuilder = inject(FormBuilder)
  private messageQueue = inject(MessageQueue)

  todoForm = this.fb.group({
    title:['',Validators.required],
    completed:[false]
  })


  submitTodo(){
    console.log(this.todoForm.value)
    this.messageQueue.dispatch({type:Actions.NEW_TODO,payload:this.todoForm.value})
  }

  get isTitleValid(){
    return (this.todoForm.get('title')?.invalid && this.todoForm.get('title')?.touched)

  }

  // set isTitleValid(value){

  // }

}
