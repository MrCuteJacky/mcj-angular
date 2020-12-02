import { Component, OnInit } from '@angular/core';
import {User} from '../vo/User';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {

  user: User;
  users: User[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  saveUser(user: User): void {
    if (user.no) {
      this.users[this.users.findIndex(data => data.no === user.no)] = user;
    } else {
      user.no = this.users.length + 1;
      this.users.push(user);
    }
  }

  edit(user: User): void {
    this.user = Object.assign({}, user);
  }
}
