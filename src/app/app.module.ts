import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BootstrapYearCalendarModule } from 'ngx-bootstrap-year-calendar/src/app/bootstrap-year-calendar.module';

@NgModule({
  imports: [BrowserModule, HttpModule, BootstrapYearCalendarModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
