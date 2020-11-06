import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  userId = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // console.log(params.get('id'));
      this.userId = parseInt(params.get('id'));
    });
    console.log('*** USER COMPONENT INIT ****');
    /*this.userId = this.route.snapshot.params.id;
    console.log(this.userId);*/
  }

  ngOnDestroy(): void {
    console.log('USER COMPONENT DESTROY -------');
  }
}
