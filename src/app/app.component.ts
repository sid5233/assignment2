import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment2';
  username = ""
  onAddUser(event : Event){
    this.username = (<HTMLInputElement>event.target).value;
  }
  resetUser(){
    this.username = ""
  }

}
