import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Map, tileLayer } from 'leaflet';
import { coordenadas, coordCiudadesHoteles, coordenadasCiudades } from './Coordenadas/coords';
import { BuscadorComponent } from '../buscador/buscador.component';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  ngOnInit(): void {
    this.ngAfterViewInit()
  }


  ngAfterViewInit(): void {
    // "setView([41.1561200, 1.1068700]" - son las coordenadas del punto médio del render
    const mapaPuntoMedio = coordenadasCiudades.reus as L.LatLngExpression;
    const map = new Map('map').setView(mapaPuntoMedio, 14);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 5,
    }).addTo(map);


    coordCiudadesHoteles.reus.map((point) => {
      L.marker([point.lat, point.lon]).addTo(map).bindPopup(point.nombre);
    })
    // map.fitBounds([
    //   ...coordenadas.map((point) => [point.lat, point.lon] as [number, number])
    // ])
    // var container = L.DomUtil.get('map');
    // if (container != null) {
    //   container = null;
    // }
    map.invalidateSize();
  }
}

