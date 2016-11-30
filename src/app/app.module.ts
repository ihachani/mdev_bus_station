import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {MapCardComponent} from "./components/map-card/map-card.component";
import {AddStationPage} from "../pages/add-station/add-station";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MapCardComponent,
    AddStationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddStationPage
  ],
  providers: []
})
export class AppModule {
}
