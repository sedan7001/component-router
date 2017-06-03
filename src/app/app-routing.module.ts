import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {FirstComponent}   from './first/first.component';
import {SecondComponent}   from './second/second.component';
import {ThirdComponent}   from './third/third.component';
import {FourthComponent} from "./third/fourth/fourth.component";
import {NotFoundComponent} from './not-found/not-found.component';
import {AsyncComponent} from "./async/async.component";
import {JsonComponent} from "./json/json.component";
import {OnewayStatementComponent} from "./oneway-statement/oneway-statement.component";
import {TwowayNgmodelComponent} from "./twoway-ngmodel/twoway-ngmodel.component";

const testRoutes: Routes = [

  {path: 'twoway', component: TwowayNgmodelComponent},
  {path: 'oneway', component: OnewayStatementComponent},
  {path: 'async', component: AsyncComponent},
  {path: 'json', component: JsonComponent},
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent}
];
const appRoutes: Routes = [
  ...testRoutes,
  {path: 'third', component: ThirdComponent},
  {path: 'third/fourth', component: FourthComponent},
  {path: '', redirectTo: '/first', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
