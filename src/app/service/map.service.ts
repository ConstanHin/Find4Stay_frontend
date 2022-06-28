import { Injectable } from '@angular/core';
import L, { tileLayer } from 'leaflet';
import { coordCiudadesHoteles, coordenadasCiudades } from '../landing-page-view/landing-page-view/map/Coordenadas/coords';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map: any;
  mapaPuntoMedio: any;
  mapInitiated = false;
  tileLayer: any;

  constructor() { }

  initMap() {
    // if (this.mapInitiated) return;

    this.mapaPuntoMedio = coordenadasCiudades.reus as L.LatLngExpression;
    // this.map = new Map('map')
    // this.map.setView(this.mapaPuntoMedio, 14);
    // this.tileLayer = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   maxZoom: 19,
    //   minZoom: 5,
    // }).addTo(this.map);

    // coordCiudadesHoteles.reus.map((point) => {
    //   L.marker([point.lat, point.lon]).addTo(this.map).bindPopup(point.nombre);
    // })

    // this.mapInitiated = true;

    this.map = L.map('map', {
      center: this.mapaPuntoMedio,
      zoom: 14
    });
    this.tileLayer = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 5,
    }).addTo(this.map);

    coordCiudadesHoteles.reus.map((point) => {
      L.marker([point.lat, point.lon]).addTo(this.map).bindPopup(point.nombre);
    })

  }

  getMap() {
    return this.map;
  }

  updateMap() {
    // this.map.setView(this.mapaPuntoMedio, 14);
  }

}
