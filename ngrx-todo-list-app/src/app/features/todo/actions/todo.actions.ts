
import { createAction } from "@ngrx/store";
import { Actions } from "../../../core/enums/actions";
import { Todo, Todos } from "../models/todo";


export const loadTodos = createAction(Actions.LOAD_TODOS)
export const loadTodoSuccess = createAction(Actions.LOAD_TODOS_SUCCESS,(todos:Todos)=>({todos}))
export const deleteTodo = createAction(Actions.DELETE_TODO,(todo:Todo)=>({todo}))
export const deleteTodoSuccess = createAction(Actions.DELETE_TODO_SUCCESS,(todo:Todo)=>({todo}))
export const newTodo = createAction(Actions.NEW_TODO)
