import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  todoArray = [];
  todo;

  addTodo(value) {
    if (value !== "") {
      this.todoArray.push(value);
    }else{
      alert('Field required **')
    }
    //console.log(this.todoArray)
  }
  // delete item
  deleteItem(todo) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
      }
    }
    console.log("delete item");
  }

  todoSubmit(value:any) {
    if(value!==""){
      this.todoArray.push(value.todo)
    }else{
      alert('Field required **')
    }
  }
}
