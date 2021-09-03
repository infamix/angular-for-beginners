import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { UserService } from './services/users.service';
import { UsersListModule } from './usersList/usersList.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UsersListModule,
    LoginModule,
    RegisterModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
