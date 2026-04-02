import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo';
import { JsonPipe } from '@angular/common';
import { TodoService } from '../../services/todo-service';
import { MessageQueue } from '../../../../core/services/message-queue';
import { Actions } from '../../../../core/enums/actions';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule,JsonPipe],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css',
})
export class TodoForm {
  messageQueue = inject(MessageQueue)

  todoFormModel:Todo={
    title:"",
    completed:false
  }
  submitTodo(){
    //this.todoService.save(this.todoFormModel).subscribe()
    this.messageQueue.dispatch({type:Actions.NEW_TODO,payload:this.todoFormModel})

  }
}
