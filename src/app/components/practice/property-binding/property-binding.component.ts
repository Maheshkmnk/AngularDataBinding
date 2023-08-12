import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css'],
})
export class PropertyBindingComponent {
  // property bind and Interpolation
  mytitle = 'hello mahesh';

  // event bind
  eventbind: any = null;
  HandleClick() {
    if (this.eventbind == null) {
      this.eventbind = 'event bind worked well';
    } else {
      this.eventbind = null;
    }
  }
  // Two way Data Bind
  twoWayBind: any;

  // built-in directive *ngIf
  flag: any;
  flag1: any;
  // flag="false"

  // Built-in directive *ngFor
  items: any[] = [4,14,1,2,3,74,5,8,45,85,6,2,41,15,0];
  // even:any;
  // odd:any;


  // Built-in directive [ngSwitch]
  condition: any;


  // Built-in directive ngStyle
  fontSize:any;
  textColor:any;
  bgColor:any;


  // ngTemplateOutlet
  selectedTemplate:any;
  
}
