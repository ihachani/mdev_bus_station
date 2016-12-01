import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  logForm() {
    this.navCtrl.parent.select(1);

  }

  constructor(public navCtrl: NavController) {

  }

}
