import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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
    /*this.todoForm=fb.group({
      name :'',
      desc : ''
    });*/
    this.todoForm=this.fb.group({
      name:new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      desc: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
    });
   }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id=params.id;
      this.todoService.getById(this.id)
      .subscribe((data:any)=>{
        this.todoForm.setValue({
          name:data.name,
          desc:data.description||''
        })
      })
    });
  }
  edit(){
    
    if(!this.todoForm.valid){
      if(this.todoForm.get('name').errors!=null)
      {
          //error=true;
        alert("You have error in name");
      }
      if(this.todoForm.controls.desc.errors!=null)
      {
        alert("You have error in desc");
      }
    }else{

      this.todoService.edit(this.id,this.todoForm.value.name,this.todoForm.value.desc)
      .subscribe(data=>{this.todoForm.reset();
      this.router.navigate(['todo']);
    });
    }
  
    }
}
