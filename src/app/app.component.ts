import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routin-app';
  users: any[] = [
    {id: 1, name : 'User 1'},
    {id: 2, name : 'User 2'},
    {id: 3, name : 'User 3'}
    ];
}
