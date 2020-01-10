import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  add(name,desc)
  {
    this.http.post('http://localhost:3001/create',{
      name,
      description:desc
      /*"name":"Test2","desc":"desc2"*/}).subscribe(data=>{
      console.log("data",data);
      alert("Done");
    })
  }
  get(){
    return this.http.get('http://localhost:3001');
   /* this.http.get('http://localhost:3001').subscribe(data=>{console.log("data",data);
  alert ("done");
  })*/
  }
}
