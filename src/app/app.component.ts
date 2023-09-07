import { Component } from '@angular/core';
import { TodoItem } from './data.model/TodoItem'
import { TodoList } from './data.model/TodoList'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  showComplete: boolean = false;

  private list = new TodoList("Fáusio", [
    new TodoItem("Go run", true),
    new TodoItem("Get flowers"),
    new TodoItem("Collect tickets"),
  ])


  get userName(): string {
    return this.list.user;
  }

  get itemCouunt(): number {
    console.log("loading itemCouunt")
    return this.list.items.filter(i => !i.complete).length
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter(i => !i.complete || this.showComplete)
  }

  addItem(newItem: string) {
    if (newItem != "") {
      this.list.AddItem(newItem);
    }
  }
}
