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
  draftOrder: User[];
  constructor() { }

  ngOnInit() {
    this.users = [];
    for (let i = 0; i < 6; i++) {
      let user = new User("test" + i, i+1);
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
    this.users2 = this.shuffleArray(this.users2);
    this.draftOrder = [];
    while (this.draftOrder.length < this.users.length) {
      let selectedUser = this.users2[Math.floor(Math.random() * this.users2.length)];
      this.users2 = this.users2.filter(user => user.id !== selectedUser.id);
      this.draftOrder.push(selectedUser);
    }
  }

  /**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
shuffleArray(array: User[]) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

}
