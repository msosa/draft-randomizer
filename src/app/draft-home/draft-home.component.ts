import { Component, OnInit } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-draft-home',
  templateUrl: './draft-home.component.html',
  styleUrls: ['./draft-home.component.css']
})
export class DraftHomeComponent implements OnInit {

  users: User[];
  constructor() { }

  ngOnInit() {
    this.users = [];
    for (let i = 0; i < 10; i++) {
      let user = new User("test" + i, i);
      this.users.push(user);
    }
  }

}
