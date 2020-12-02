import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserFormComponent} from './user-form/user-form.component';
import {UserManagerComponent} from './user-manager/user-manager.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [UserFormComponent, UserManagerComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserManagerComponent
      }
    ])
  ]
})
export class UserModule { }
