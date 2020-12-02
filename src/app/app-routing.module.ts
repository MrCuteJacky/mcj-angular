import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AComponent} from './a/a.component';
import {FunctionComponent} from './function/function.component';
import {BComponent} from './b/b.component';
import {CComponent} from './c/c.component';
import {ErrorComponent} from './error/error.component';
import {UserModule} from './user/user.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'a',
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: FunctionComponent,
    loadChildren: () => UserModule
  },
  {
    path: 'a',
    component: FunctionComponent,
    children: [
      {
        path: '',
        component: AComponent
      }
    ]
  },
  {
    path: 'b',
    component: FunctionComponent,
    children: [
      {
        path: '',
        component: BComponent
      }
    ]
  },
  {
    path: 'c',
    component: FunctionComponent,
    children: [
      {
        path: '',
        component: CComponent
      }
    ]
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
