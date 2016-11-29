import {Component, ViewChild, ElementRef} from '@angular/core';

import {NavController} from 'ionic-angular';
import {StationsService} from "../../app/components/stations/stations.service";
import {MapInfo} from "../../app/components/map-card/Map-Info";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [StationsService]
})
export class AboutPage {


  @ViewChild('map') mapElement: ElementRef;
  map: any;
  private stationsInfo: MapInfo[];
  private rows;

  constructor(public navCtrl: NavController,
              private stationsService: StationsService) {

  }

  ngOnInit() {

  }

  ionViewDidLoad() {
    this.stationsService.getStations().then(stations => {
      this.stationsInfo = stations;
      this.rows = Array.from(Array(Math.ceil(this.stationsInfo.length / 2)).keys())
    });
  }


}
