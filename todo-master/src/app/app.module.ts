import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AddtodoComponent } from './addtodo/addtodo.component'
import{HttpClientModule} from '@angular/common/http';
import { EdittodoComponent } from './edittodo/edittodo.component';
import { CustomPipe } from './pipes/custom.pipe';
import { CustomdirectiveDirective } from './directives/customdirective.directive';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LoginComponent,
    AddtodoComponent,
    EdittodoComponent,
    CustomPipe,
    CustomdirectiveDirective,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
