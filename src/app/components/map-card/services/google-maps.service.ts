/**
 * Created by lonsomehell on 11/28/16.
 */
import {Injectable, ElementRef} from '@angular/core';
import {MapInfo} from "../Map-Info";

declare var google;

@Injectable()
export class GoogleMapsService {

  private map: any;

  constructor(private mapElement: ElementRef) {

  }

  public getMap = (mapInfo: MapInfo): any => {
    let latLng = new google.maps.LatLng(mapInfo.latitude, mapInfo.longitude);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker(mapInfo.name);
  };

  private addMarker(name: string) {

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>" + name + "</h4>";

    this.addInfoWindow(marker, content);
  }

  private addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

}