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

  public getStationsByKeyWord(keyWord: string): Promise<MapInfo[]> {
    let result: MapInfo[];

    result = Stations.filter((value) => {
      return (value.name.indexOf(keyWord) >= 0) || (value.address.indexOf(keyWord) >= 0);
    });

    return Promise.resolve(result);
  }
}
