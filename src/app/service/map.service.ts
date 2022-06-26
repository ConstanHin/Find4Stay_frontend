import { Injectable } from '@angular/core';
import { Map, tileLayer } from 'leaflet';
import { coordenadasCiudades } from '../landing-page-view/landing-page-view/map/Coordenadas/coords';
import { interval, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map: any;
  mapaPuntoMedio: any;
  mapInitiated = false;
  tileLayer: any;
  // myTimer = interval(1000);

  constructor() { }

  initMap() {
    let i = 0;

    if (this.mapInitiated) return;

    this.mapaPuntoMedio = coordenadasCiudades.reus as L.LatLngExpression;
    this.map = new Map('map').setView(this.mapaPuntoMedio, 14);
    this.tileLayer = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 5,
    }).addTo(this.map);

    this.mapInitiated = true;

  }

  updateMap() {
    if (!this.mapInitiated) return;
    console.log("updating map");

  }

  getMap() {
    return this.map;
  }

}
