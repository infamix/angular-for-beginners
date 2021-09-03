import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from './types/user.interface';
import { UserService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'angular-for-beginners'

  users: UserInterface[] = []

  constructor (private http: HttpClient, private usersService: UserService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users: UserInterface[]) => {
      this.users = users
    })
  }

  addUser(name: string): void {
    this.usersService.addUser(name).subscribe(newUser => {
      this.users.push(newUser)
    })
  }

  removeUser(id: string): void {
    this.usersService.removeUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !==id)
    })
  }


}
