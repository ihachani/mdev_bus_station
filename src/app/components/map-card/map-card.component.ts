/**
 * Created by lonsomehell on 11/28/16.
 */
import {Component, ViewChild, ElementRef, Input} from '@angular/core';

import {NavController, Platform} from 'ionic-angular';
import {GoogleMapsService} from "./google-maps.service";

declare var google;

@Component({
  selector: 'my-component',
  templateUrl: 'map-card.component.html',
})
export class MapCardComponent {

  private _isAndroid: boolean;
  private _isiOS: boolean;

  @Input() latitude: number;

  @Input() langitude: number;


  @ViewChild('mapcard') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, private platform: Platform) {
    this._isAndroid = platform.is('android');
    this._isiOS = platform.is('ios');
  }

  ngOnInit() {
    let googleMapsService: GoogleMapsService = new GoogleMapsService(this.mapElement);
    googleMapsService.getMap({
      longitude: this.langitude,
      latitude: this.latitude,
      name: "name",
      address: "address",
    });
  }



  openMapsApp() {
    var coords = "-34.9290,138.6010";
    if (this._isiOS) {
      window.open("http://maps.apple.com/?q=" + coords, '_system');
      return;
    }
    if (this._isAndroid) {
      window.open("geo:" + coords);
      return;
    }
    window.open("http://maps.google.com/?q=" + coords, '_system');
    return;
  }


}
