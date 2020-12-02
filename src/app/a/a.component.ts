import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {

  name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
