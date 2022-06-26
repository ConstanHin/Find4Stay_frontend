import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as L from 'leaflet';
import { Map, tileLayer } from 'leaflet';
import { map } from 'rxjs';
import { coordenadas } from './Coordenadas/coords';
@Component({
  selector: 'app-resultado-busqueda-hoteles-view',
  templateUrl: './resultado-busqueda-hoteles-view.component.html',
  styleUrls: ['./resultado-busqueda-hoteles-view.component.css']
})
export class ResultadoBusquedaHotelesViewComponent implements OnInit {

ngOnInit(): void{
  this.ngAfterViewInit()
}
  ngAfterViewInit(): void{
    const map = new Map('map').setView([41.1561200, 1.1068700], 14);
   tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 5,
      attribution: '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  coordenadas.map((point)=>{
    L.marker([point.lat, point.lon]).addTo(map).bindPopup(point.nombre);
   })
   map.fitBounds([
    ...coordenadas.map((point) => [point.lat,point.lon] as[number, number])
  ])
}
onMapReady(map: L.Map) {
  setTimeout(() => {
    map.invalidateSize();
  }, 1);
}

}
