import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Map, tileLayer } from 'leaflet';
import { MapService } from 'src/app/service/map.service';
import { coordenadas, coordCiudadesHoteles, coordenadasCiudades } from './Coordenadas/coords';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  constructor(private mapService: MapService) {
  }
  ngOnInit(): void {
    // this.ngAfterViewInit();
    console.info("onInit map");
    this.mapService.initMap();
    this.mapService.updateMap();
  }


  ngAfterViewInit(): void {
    // try {


    //   // "setView([41.1561200, 1.1068700]" - son las coordenadas del punto médio del render
    //   var mapaPuntoMedio = coordenadasCiudades.reus as L.LatLngExpression;
    //   var map = new Map('map').setView(mapaPuntoMedio, 14);
    //   tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     maxZoom: 19,
    //     minZoom: 5,
    //   }).addTo(map);


    //   coordCiudadesHoteles.reus.map((point) => {
    //     L.marker([point.lat, point.lon]).addTo(map).bindPopup(point.nombre);
    //   })
    //   // map.fitBounds([
    //   //   ...coordenadas.map((point) => [point.lat, point.lon] as [number, number])
    //   // ])

    //   map.invalidateSize();
    // } catch (error) {

    // }
  }
}

