import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'; 
import { CommonserviceService } from 'service/commonservice.service';
import { TodoService } from 'service/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
title="Todo";
todos:any=[];/*=[
  {name:"todo1", desc:"desc1"},
  {name:"todo2",desc:"desc2"},
  {name:"todo3",desc:"desc3"}
];*/
newTodo="";
todoForm;
  constructor(private fb:FormBuilder,private router:Router,
     private commonService:CommonserviceService,
     private todoService:TodoService) {//injection
    this.todoForm=fb.group({
      name :'',
      desc : ''
    })
    
   }

  ngOnInit() {
    this.todoService.get()
    .subscribe(data=>{this.todos=data});
  }
delete(todo)
{
  alert(todo.name);
  this.todos=this.todos.filter(function (t){
  
    return t!=todo;
  })
}
add(){
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
view(){
this.commonService.showErr();
  this.router.navigate(['add']);
  //this.router.navigateByUrl('/todo');
}
}
