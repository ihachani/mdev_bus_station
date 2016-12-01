/**
 * Created by lonsomehell on 11/14/16.
 */
import {Injectable} from "angular2/core";
import {Http} from "@angular/http";

@Injectable()
export class MapQueryService {
  private http;
  private data;

  constructor(http: Http) {
    this.http = http;
    this.data = null;
  }

  retrieveData() {
    this.http.get('./mocks/test.json')
      .subscribe(data => {
        this.data = data;
      });
  }

  getData() {
    return this.data;
  }
}
