

import { Component, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxSelectBoxModule,
  DxCheckBoxModule,
  DxDateBoxModule,
  DxCalendarModule,
  DxTemplateModule } from 'devextreme-angular';

import { Calendar } from "./calendar";

if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  calendar: Calendar = new Calendar();
  firstDay: number = 1;
  years: number[] = [
    2017, 2018, 2019
  ];
  months =  [
    { name: "January", value: 0 },
    { name: "February", value: 1 },
    { name: "March", value: 2 },
    { name: "April", value: 3 },
    { name: "May", value: 4 },
    { name: "June", value: 5 },
    { name: "July", value: 6 },
    { name: "August", value: 7 },
    { name: "September", value: 8 },
    { name: "October", value: 9 },
    { name: "November", value: 10 },
    { name: "December", value: 11 },
  ];
  cellTemplate = "cell";
  holydays: any = [[1,0], [4,6], [25,11]];
  isWeekend(date) {
    var day = date.getDay();

    return day === 0 || day === 6;
  }

  useCellTemplate(e) {
    if(e.value) {
      this.cellTemplate = "custom";
    } else {
      this.cellTemplate = "cell";
    }
  }
  getCellCssClass(date) {
    var cssClass = "";

    if(this.isWeekend(date))
      cssClass = "weekend";

    this.holydays.forEach(function(item) {
      if(date.getDate() === item[0] && date.getMonth() === item[1]) {
        cssClass = "holyday";
        return false;
      }
    });

    return cssClass;
  }
}

@NgModule({
  imports: [
    BrowserModule,
    DxSelectBoxModule,
    DxCalendarModule,
    DxCheckBoxModule,
    DxDateBoxModule,
    DxTemplateModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
