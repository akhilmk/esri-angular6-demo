import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Esri app';
  isData : number;
  zoom: number;
  latLog: any[];

  constructor() {
    this.zoom = 13;
    this.latLog = [-74.0060, 40.7128];
  }
  updateFromChild($event){
    this.isData = $event;
  }

  tapItem(zoomval) {
    this.zoom = zoomval;
    console.log(this.zoom);
  }

  tapKochi() {
    this.latLog = [76.2673, 9.9312];
  }

  tapNewYork() {
    this.latLog = [-74.0060, 40.7128];
  }

  tapLondon() {
    this.latLog = [-0.1278, 51.5074];
  }
}
