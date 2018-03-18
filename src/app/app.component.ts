import {Component} from '@angular/core';
import {BootstrapYearCalendar} from "ngx-bootstrap-year-calendar";

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  private bootstrapYearCalendarOptions: BootstrapYearCalendar = {
    dataSource: [
      {
        id: 1,
        name: 'Object-based radical open system',
        startDate: new Date('2017-05-21T00:34:15Z'),
        endDate: new Date('2017-07-12T21:26:29Z')
      }, {
        id: 2,
        name: 'Phased mobile firmware',
        startDate: new Date('2017-05-19T19:19:20Z'),
        endDate: new Date('2017-06-28T17:43:06Z')
      }, {
        id: 3,
        name: 'Networked actuating access',
        startDate: new Date('2017-06-04T16:37:28Z'),
        endDate: new Date('2017-05-31T19:28:32Z')
      }
    ],
  };

}
