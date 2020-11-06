import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const API = 'http://localhost:8080/lunchtime';

@Component({
  selector: 'app-cantine',
  templateUrl: './cantine.component.html',
  styleUrls: ['./cantine.component.css']
})
export class CantineComponent implements OnInit {
  token: string | null = null;
  listUser: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  login() {
    const credentials = {
      email: 'toto@gmail.com',
      password: 'bonjour'
    };
    this.http.post(API + '/login', credentials, {observe: 'response'}).subscribe((res: any) => {
      // console.log(res);
      this.token = res.headers.get('Authorization');
      console.log(this.token);
    });
  }

  getUsers() {
    const options = {
      headers: {'Authorization': this.token}
    };
    this.http.get(API + '/user/findall', options).subscribe((res: any) => {
      console.log(res);
      this.listUser = res;
    });
  }
}
