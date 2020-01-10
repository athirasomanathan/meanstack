import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import{AddtodoComponent} from './addtodo/addtodo.component'



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'todo', component:TodoComponent},
  {path:'add', component:AddtodoComponent},
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
