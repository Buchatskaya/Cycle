import { Injectable } from '@angular/core';
import {GetProfileResponse} from "./get-profile-response";
import {PutProfileRequest} from "./put-profile-request";
import {GetCalendarRequest} from "./get-calendar-request";
import {GetCalendarResponse} from "./get-calendar-response";
import {SetCycleDateResponse} from "./set-cycle-date-response";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getProfile(): GetProfileResponse {
    return new GetProfileResponse({
      name: 'Tatiana',
      period: 28
    });
  }

  putProfile(request: PutProfileRequest): void {

  }

  getCalendar(request: GetCalendarRequest): GetCalendarResponse {
    return new GetCalendarResponse({
      yearMonth: {
        '201805': [2, 2, 2, 1, 2, 2, 2],
        '201806': [3, 3, 0, 3, 3, 3, 3],
        '201807': [3, 3, 3, 3, 3, 0, 3]
      }
    });
  }

  setCycleDate(date:Date): SetCycleDateResponse {
    return new SetCycleDateResponse({
      needsConfirmation: true,
      message: 'Вы уверены, что ввели правильную дату?'
    });
  }

  confirmCycleDate(date:Date): void {

  }
}
