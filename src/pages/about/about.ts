import {Component, ViewChild, ElementRef} from '@angular/core';

import {NavController, Content, Platform} from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  private _isAndroid: boolean;
  private _isiOS: boolean;

  // private platform : Platform;
  @ViewChild(Content) content: Content;

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, private platform: Platform) {
    this._isAndroid = platform.is('android');
    this._isiOS = platform.is('ios');
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  addMarker() {

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);
  }
  openMapsApp() {
    var coords = "-34.9290,138.6010";
    if(this._isiOS) {
      window.open("http://maps.apple.com/?q=" + coords, '_system');
      return;
    }
    if(this._isAndroid) {
      window.open("geo:" + coords);
      return;
    }
    window.open("http://maps.google.com/?q=" + coords, '_system');
    return;
  }

  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }
}
