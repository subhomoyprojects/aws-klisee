import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isloggedIn: boolean;

  constructor() { }

  ngOnInit() 
  {
    if(sessionStorage.getItem('userId') ===null || sessionStorage.getItem('userId') == '')
    {
      this.isloggedIn = false;
    } 
    else 
    {
      this.isloggedIn= true; 
    }
  }


  LogOut()
  {
    sessionStorage.setItem('userId','')
    sessionStorage.setItem('projectId', '')
  }
  
}
