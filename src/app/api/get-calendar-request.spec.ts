import {GetCalendarRequest} from './get-calendar-request';

describe('GetCalendarRequest', () => {
  let date: Date;
  let count: number;
  let getCalendarRequest: GetCalendarRequest;

  it('Date and count matches', () => {
    date = new Date();
    count = 5;
    getCalendarRequest = new GetCalendarRequest(date, count);

    expect(getCalendarRequest.monthStart).toBe(date);
    expect(getCalendarRequest.monthCount).toBe(count);
  });
});
