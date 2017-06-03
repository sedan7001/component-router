import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-twoway-ngmodel',
  template: `
 
  `,
  styles: [`section {
    margin-bottom: 20px;
  }`]
})
export class TwowayNgmodelComponent {

  city: string = "seoul";
  cities: Object = [
    {han: "서울", eng: "seoul"},
    {han: "대전", eng: "daejeon"},
    {han: "대구", eng: "daegu"},
    {han: "부산", eng: "pusan"}
  ];

}
