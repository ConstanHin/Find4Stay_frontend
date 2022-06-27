import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Map, tileLayer } from 'leaflet';
import {coordenadas} from './Coordenadas/coords';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit(): void {

    const map = new Map('map').setView([41.15612, 1.10687], 14);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 5,
      attribution:'<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    coordenadas.map((point) => {
      L.marker([point.lat, point.lon]).addTo(map).bindPopup(point.nombre);
    });
    map.fitBounds([
     ...coordenadas.map((point) => [point.lat, point.lon] as [number, number]),
   ]);
  }
}




