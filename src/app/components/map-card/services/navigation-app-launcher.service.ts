/**
 * Created by lonsomehell on 11/28/16.
 */

import {Injectable} from "@angular/core";
import {Platform} from "ionic-angular";

@Injectable()
export class NavigationAppLauncherService {

  private _isAndroid: boolean;
  private _isiOS: boolean;

  constructor(private platform: Platform) {
    this._isAndroid = platform.is('android');
    this._isiOS = platform.is('ios');
  }

  public lunchNavigationApp = (latitude: number, longitude: number): void => {
    let coords = "" + latitude + "," + longitude;
    if (this._isiOS) {
      window.open("http://maps.apple.com/?q=" + coords, '_system');
      return;
    }
    if (this._isAndroid) {
      window.open("geo:" + coords);
      return;
    }
    window.open("http://maps.google.com/?q=" + coords, '_system');
    return;
  }
}
