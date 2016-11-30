import {ViewController} from "ionic-angular";
import {Component, ViewChild, ElementRef} from "@angular/core";
import {Geolocation} from 'ionic-native';
import {GoogleMapsService} from "../../app/components/map-card/services/google-maps.service";
import {MapInfo} from "../../app/components/map-card/Map-Info";
/**
 * Created by lonsomehell on 11/30/16.
 */

@Component({
  selector: 'page-add-station',
  templateUrl: 'add-station.html',
})
export class AddStationPage {

  mapInfo: MapInfo;
  private posOptions = {timeout: 10000, enableHighAccuracy: false};
  private googleMapsService: GoogleMapsService;
  @ViewChild('mapcard') mapElement: ElementRef;

  constructor(public viewCtrl: ViewController) {
    this.mapInfo = new MapInfo();
  }


  ionViewDidLoad() {


    this.googleMapsService = new GoogleMapsService(this.mapElement);

    Geolocation
      .getCurrentPosition(this.posOptions)
      .then((position) => {
        // let googleMapsService: GoogleMapsService = new GoogleMapsService(this.mapElement);

        this.googleMapsService.getMap({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
          name: null,
          address: null
        });
        this.googleMapsService.bindClickListener(this);
      }, (err) => {
        this.googleMapsService.getMap({
          longitude: 10.0031931,
          latitude: 36.7948008,
          name: null,
          address: null
        });
        this.googleMapsService.bindClickListener(this);
      });


  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  public setLatLangFromClick(latLang: any) {

    this.mapInfo.latitude = latLang.lat();
    this.mapInfo.longitude = latLang.lng();
    this.googleMapsService.moveMarker(latLang);
  }
}
