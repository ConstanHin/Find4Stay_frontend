import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/service/map.service';
import { RedirectMessageService } from 'src/app/service/redirect-message.service';


@Component({
  selector: 'app-landing-page-view',
  templateUrl: './landing-page-view.component.html',
  styleUrls: ['./landing-page-view.component.css']
})
export class LandingPageViewComponent implements OnInit {



  constructor(
    private mapService: MapService
   ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.mapService.updateMap();

  }

}
