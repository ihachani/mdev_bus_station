import {Component, ViewChild, ElementRef} from '@angular/core';

import {NavController, ModalController} from 'ionic-angular';
import {StationsService} from "../../app/components/stations/stations.service";
import {MapInfo} from "../../app/components/map-card/Map-Info";
import {AddStationPage} from "../add-station/add-station";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [StationsService]
})
export class AboutPage {


  @ViewChild('map') mapElement: ElementRef;
  map: any;
  stationsInfo: MapInfo[];
  fullStationsList: MapInfo[];
  rows;

  constructor(public navCtrl: NavController,
              private stationsService: StationsService,
              public modalCtrl: ModalController) {

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

  openAddModal() {
    let modal = this.modalCtrl.create(AddStationPage, {aboutPage: this});
    modal.present();
  }
}
