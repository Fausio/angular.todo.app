import { Component } from '@angular/core';
import { TodoItem } from './data.model/TodoItem'
import { TodoList } from './data.model/TodoList'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  
  private list = new TodoList("Bob", [
    new TodoItem("Go run", true),
    new TodoItem("Get flowers"),
    new TodoItem("Collect tickets"),
  ])


  get userName(): string {
    return this.list.user;
  }

  get itemCouunt(): number {
    return this.list.items.filter(i => !i.complete).length
  }

}
