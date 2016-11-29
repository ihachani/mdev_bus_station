/**
 * Created by lonsomehell on 11/28/16.
 */
import {Component, ViewChild, ElementRef, Input} from '@angular/core';

import {GoogleMapsService} from "./services/google-maps.service";
import {NavigationAppLauncherService} from "./services/navigation-app-launcher.service";
import {MapInfo} from "./Map-Info";

@Component({
  selector: 'mapCard',
  templateUrl: 'map-card.component.html',
  providers: [NavigationAppLauncherService]
})
export class MapCardComponent {

  @Input() mapInfo: MapInfo;
  @ViewChild('mapcard') mapElement: ElementRef;
  map: any;

  constructor(private navigationAppLauncher: NavigationAppLauncherService) {

  }

  ngOnInit() {

    let googleMapsService: GoogleMapsService = new GoogleMapsService(this.mapElement);

    googleMapsService.getMap({
      longitude: this.mapInfo.longitude,
      latitude: this.mapInfo.latitude,
      name: "name",
      address: "address",
    });

  }

  openMapsApp() {

    this.navigationAppLauncher.lunchNavigationApp(
      this.mapInfo.latitude,
      this.mapInfo.longitude
    );
  }


}
