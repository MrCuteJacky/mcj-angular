import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserFormComponent} from './user-form/user-form.component';
import {UserManagerComponent} from './user-manager/user-manager.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserManagerComponent
  }
];

@NgModule({
  declarations: [UserFormComponent, UserManagerComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
