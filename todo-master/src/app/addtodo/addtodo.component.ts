import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from 'service/todo.service';
@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  title="Todo";
  todos=[
    {name:"todo1", desc:"desc1"},
    {name:"todo2",desc:"desc2"},
    {name:"todo3",desc:"desc3"}
  ];
  newTodo="";
  todoForm;
  constructor(private fb:FormBuilder, private todoService:TodoService) {
    this.todoForm=fb.group({
      name :'',
      desc : ''
    })
   }

  ngOnInit() {
  }
  add(){
    this.todoService.add();
    if(!this.todoForm.valid){
     alert("enter all required fields");
     return;
  
    }
    this.todos.push({
      name:this.todoForm.value.name,
      desc:this.todoForm.value.desc
    
    });
    this.todoForm.reset;
    //this.newTodo=" ";
  }
  onTextChange(event){
    //alert(event.target.value);
    this.newTodo=event.target.value;
  }
}
