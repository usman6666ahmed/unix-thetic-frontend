import { User } from 'src/types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {

  @Input() user:User | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
