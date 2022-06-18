import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  city: any;
  number= 0;

  ngOnInit(): void {
  }
  constructor(){
    this.city = sessionStorage.getItem('ciudadKey');// agafem el valor de ciudadkey

  }

changeCity(ciudad : string){
  this.city = ciudad;
  console.log(this.city);
  sessionStorage.setItem('ciudadKey',this.city); //a ciudadKey li donem un valor
  this.refreshPage();

}

refreshPage() {
  window.location.reload();
 }

}
