import { Component, Input, OnInit} from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() hotel: Hotel = new Hotel();
  serverUrl: string = environment.SERVER_URL;

  constructor() { }

  ngOnInit(): void {
  }

}
