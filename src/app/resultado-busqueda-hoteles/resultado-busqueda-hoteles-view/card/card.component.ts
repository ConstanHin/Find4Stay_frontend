import { Component, Input, OnInit} from '@angular/core';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() hotel: Hotel = new Hotel();

  constructor() { }

  ngOnInit(): void {
  }

}
