import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import {SecondComponent} from './second/second.component';
import {UserComponent} from './user/user.component';
import {CantineComponent} from './cantine/cantine.component';

const routes: Routes = [
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'cantine', component: CantineComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
