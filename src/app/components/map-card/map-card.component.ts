/**
 * Created by lonsomehell on 11/28/16.
 */
import {Component, ViewChild, ElementRef, Input} from '@angular/core';

import {GoogleMapsService} from "./services/google-maps.service";
import {NavigationAppLauncherService} from "./services/navigation-app-launcher.service";

declare var google;

@Component({
  selector: 'my-component',
  templateUrl: 'map-card.component.html',
  providers: [NavigationAppLauncherService]
})
export class MapCardComponent {


  @Input() latitude: number;

  @Input() langitude: number;


  @ViewChild('mapcard') mapElement: ElementRef;
  map: any;

  constructor(private navigationAppLauncher: NavigationAppLauncherService) {

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
    this.navigationAppLauncher.lunchNavigationApp(this.latitude, this.langitude);
  }


}
