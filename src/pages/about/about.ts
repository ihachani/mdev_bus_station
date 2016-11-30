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
  private fullStationsList: MapInfo[];
  private rows;

  constructor(public navCtrl: NavController,
              private stationsService: StationsService) {

  }

  ngOnInit() {

  }

  ionViewDidLoad() {
    this.stationsService.getStations().then(stations => {
      this.stationsInfo = stations;
      this.fullStationsList = stations;
      this.createViewRows();
    });

  }

  private createViewRows() {
    this.rows = Array.from(Array(Math.ceil(this.stationsInfo.length / 2)).keys())
  }

  filterItems(ev: any) {
    // set val to the value of the searchbar
    let val = ev.target.value.trim();

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.stationsInfo = this.fullStationsList.filter((item) => {
        return (item.name.toUpperCase().indexOf(val.toUpperCase()) >= 0) ||
          (item.address.toUpperCase().indexOf(val.toUpperCase()) >= 0);
      });
      this.createViewRows();
    } else {
      this.stationsInfo = this.fullStationsList;
      this.createViewRows();
    }
  }
}
