import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Map, tileLayer } from 'leaflet';
import { coordCiudadesHoteles, coordenadas, coordenadasCiudades} from './Coordenadas/coords';
import { BuscadorComponent } from '../buscador/buscador.component';
import { GeoJsonObject } from 'geojson';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
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


async function getData(point: { lat: number; nombre: ((layer: L.Layer) => L.Content) | L.Content | L.Popup; }) {
  let marker = null
  const updateMap = async () => {
  const response = await fetch('API')
  const data = await response.json()
  return (data: { iss_position: { lat: any; lon: any; }; })  => {
      const { lat, lon } = data.iss_position
       console.log( lat, lon)
       L.marker([point.lat,lon])
       .bindPopup(point.nombre)
       .addTo(map);
      }
    }

  }
}
}


