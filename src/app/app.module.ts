import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { FunctionComponent } from './function/function.component';
import { ErrorComponent } from './error/error.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    CComponent,
    FunctionComponent,
    ErrorComponent,
    UserFormComponent,
    UserManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
