import {ViewController} from "ionic-angular";
import {Component, ViewChild, ElementRef} from "@angular/core";
/**
 * Created by lonsomehell on 11/30/16.
 */

@Component({
  selector: 'page-add-station',
  templateUrl: 'add-station.html',
})
export class AddStationPage {

  @ViewChild('mapcard') mapElement: ElementRef;
  map: any;

  constructor(public viewCtrl: ViewController) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
