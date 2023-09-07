import { TodoItem } from "./TodoItem";
export class TodoList {

  //public user = '';

  constructor(public user: string, private todoItems: TodoItem[] = []) {

  }


  get items(): readonly TodoItem[] {
    return this.todoItems;
  }

  AddItem(task: string) {
    this.todoItems.push(new TodoItem(task));
  }

}
