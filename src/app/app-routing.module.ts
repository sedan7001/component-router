import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {FirstComponent}   from './first/first.component';
import {SecondComponent}   from './second/second.component';
import {ThirdComponent}   from './third/third.component';
import {FourthComponent} from "./third/fourth/fourth.component";
import {NotFoundComponent} from './not-found/not-found.component';

const testRoutes: Routes = [
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
