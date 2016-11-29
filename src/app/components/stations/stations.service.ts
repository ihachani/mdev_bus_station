/**
 * Created by lonsomehell on 11/29/16.
 */

import {Injectable} from '@angular/core';
import {MapInfo} from "../map-card/Map-Info";
import {Stations} from "./mock-stations";

@Injectable()
export class StationsService {

  public getStations(): Promise<MapInfo[]> {
    return Promise.resolve(Stations);
  }

}
