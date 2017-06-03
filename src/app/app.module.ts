import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {ThirdComponent} from './third/third.component';
import {FourthComponent} from './third/fourth/fourth.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AsyncComponent} from "./async/async.component";
import {JsonComponent} from "./json/json.component";
import {MyClickDirective} from "./oneway-statement/my-click.directive";
import {OnewayStatementComponent} from "./oneway-statement/oneway-statement.component";
import {ContactComponent} from "./oneway-statement/contact.component";
import {TwowayNgmodelComponent} from "./twoway-ngmodel/twoway-ngmodel.component";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    NotFoundComponent,
    AsyncComponent,
    JsonComponent,
    MyClickDirective,
    OnewayStatementComponent,
    ContactComponent,
    TwowayNgmodelComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
