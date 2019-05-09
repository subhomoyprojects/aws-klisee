import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'klisee';
  isloggedIn: boolean;
  constructor(){
    if(sessionStorage.getItem('userId') !=''){
      this.isloggedIn = true;
    } else {
      this.isloggedIn= false; 
    }
  }
}
