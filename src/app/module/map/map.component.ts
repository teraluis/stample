import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  latitude: string;
  longitude: string;

  constructor() {

  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: parseFloat(this.latitude),
        lng: parseFloat(this.longitude),
      };
    });
  }

  zoomIn() {
    this.zoom = (this.zoom < this.options.maxZoom) ? this.zoom++ : this.zoom;
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) {
      this.zoom--;
    }
  }
}
