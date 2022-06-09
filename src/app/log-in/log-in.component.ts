
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
usuario: string="";
password: string="";

login(){
  console.log(this.usuario);
  console.log(this.password);
}
constructor() { }
  ngOnInit(): void {
  }
}
