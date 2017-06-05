import { Component, OnInit } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-draft-home',
  templateUrl: './draft-home.component.html',
  styleUrls: ['./draft-home.component.css']
})
export class DraftHomeComponent implements OnInit {

  users: User[] = [];
  draftOrder: User[];
  constructor() { }

  ngOnInit() {
  }

  addUser() {
    this.users.push(new User("", null));
  }

  randomize() {
    let randomizedUsers = [];
    this.users.forEach(user => {
      for (let i = 0; i < user.numberOfPicks; i++) {
        randomizedUsers.push(new User(user.name, 1, user.id));
      }
    });
    randomizedUsers = this.shuffleArray(randomizedUsers);
    this.draftOrder = [];
    while (this.draftOrder.length < this.users.length) {
      let selectedUser = randomizedUsers[Math.floor(Math.random() * randomizedUsers.length)];
      randomizedUsers = randomizedUsers.filter(user => user.id !== selectedUser.id);
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
