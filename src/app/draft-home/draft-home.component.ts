import { Component, OnInit } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-draft-home',
  templateUrl: './draft-home.component.html',
  styleUrls: ['./draft-home.component.css']
})
export class DraftHomeComponent implements OnInit {

  users: User[];
  users2: User[];
  constructor() { }

  ngOnInit() {
    this.users = [];
    for (let i = 0; i < 10; i++) {
      let user = new User("test" + i, i);
      this.users.push(user);
    }
  }

  randomize() {
    this.users2 = [];
    this.users.forEach(user => {
      for (let i = 0; i < user.numberOfPicks; i++) {
        this.users2.push(new User(user.name, 1, user.id));
      }
    });
  }

}
