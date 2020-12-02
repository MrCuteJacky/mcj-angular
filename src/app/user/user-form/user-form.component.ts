import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../vo/User';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() user: User;
  @Output() saveEvent = new EventEmitter<User>();

  sexArray: string[] = ['boy', 'girl'];

  constructor() { }

  ngOnInit(): void {
    if (!this.user) {
      this.user = {sex: 'boy'};
    }
  }

  save(): void {
    this.saveEvent.emit(this.user);
    this.user = {sex: 'boy'};
  }

}
