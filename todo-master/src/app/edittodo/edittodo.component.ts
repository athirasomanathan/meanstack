import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.component.html',
  styleUrls: ['./edittodo.component.css']
})
export class EdittodoComponent implements OnInit {
  id="";
  todoForm;
  constructor(private router:Router,
    private route:ActivatedRoute,
     private fb:FormBuilder, 
     private todoService:TodoService) {
    this.todoForm=fb.group({
      name :'',
      desc : ''
    });
   }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id=params.id;
      this.todoService.getById(this.id)
      .subscribe((data:any)=>{
        this.todoForm.setValue({
          name:data.name,
          desc:data.description
        })
      })
    });
  }
  edit(){
    
    if(!this.todoForm.valid){
     alert("enter all required fields");
     this.todoService.add(this.todoForm.value.name,this.todoForm.value.desc);
     return;
    }
    this.todoService.edit(this.id,this.todoForm.value.name,this.todoForm.value.desc)
    .subscribe(data=>{this.todoForm.reset();
    this.router.navigate(['todo']);
  });
  
    }
}
