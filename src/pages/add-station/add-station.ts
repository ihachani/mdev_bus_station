import {ViewController, NavParams} from "ionic-angular";
import {Component, ViewChild, ElementRef} from "@angular/core";
import {Geolocation} from 'ionic-native';
import {GoogleMapsService} from "../../app/components/map-card/services/google-maps.service";
import {MapInfo} from "../../app/components/map-card/Map-Info";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {StationsService} from "../../app/components/stations/stations.service";
/**
 * Created by lonsomehell on 11/30/16.
 */

@Component({
  selector: 'page-add-station',
  templateUrl: 'add-station.html',
  providers: [StationsService]
})
export class AddStationPage {

  mapInfo: MapInfo;
  private posOptions = {timeout: 10000, enableHighAccuracy: false};
  private googleMapsService: GoogleMapsService;
  form: FormGroup;
  @ViewChild('mapcard') mapElement: ElementRef;

  constructor(public viewCtrl: ViewController,
              public fb: FormBuilder,
              public stationsService: StationsService,
              public params: NavParams) {

    this.mapInfo = new MapInfo();
    this.form = this.fb.group({
      latitude: ["", Validators.required],
      longitude: ["", Validators.required],
      name: ["", Validators.required],
      address: ["", Validators.required]
    });

  }


  ionViewDidLoad() {


    this.googleMapsService = new GoogleMapsService(this.mapElement);

    Geolocation
      .getCurrentPosition(this.posOptions)
      .then((position) => {

        this.initializeMapFromPosition(position.coords.latitude, position.coords.longitude);

      }, (err) => {

        console.log('Error');
        this.initializeMapFromPosition(36.7948008, 10.0031931);

      });


  }

  private initializeMapFromPosition = (lat, lng) => {

    this.googleMapsService.getMap({
      longitude: lng,
      latitude: lat,
      name: null,
      address: null
    });
    this.googleMapsService.bindClickListener(this);

  };

  dismiss() {
    this.viewCtrl.dismiss();
  }

  public setLatLangFromClick(latLang: any) {

    this.form.controls['latitude'].setValue(latLang.lat(), {onlySelf: true});
    this.form.controls['longitude'].setValue(latLang.lng(), {onlySelf: true});
    this.googleMapsService.moveMarker(latLang);
  }

  addStationAndClose({value, valid}: { value: MapInfo, valid: boolean }) {

    console.log(value, valid);
    this.stationsService.addStation(value);
    this.dismiss();
    this.params.get('aboutPage').ionViewWillEnter();
  }

}
