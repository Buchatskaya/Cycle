import {GetCalendarResponse} from './get-calendar-response';

describe('GetCalendarResponse', () => {
  let getCalendarResponse: GetCalendarResponse;
  let data: object;

  it('monthIndexes and yearMonths match', () => {
    data = {
      yearMonth: {
        '201805': [2, 2, 2, 1, 2, 2, 2],
        '201806': [3, 3, 0, 3, 3, 3, 3],
        '201807': [3, 3, 3, 3, 3, 0, 3],
      },
      success: true,
      errors: []
    };
    getCalendarResponse = new GetCalendarResponse(data);

    expect(getCalendarResponse.monthIndexes).toEqual(['201805','201806','201807']);
    expect(getCalendarResponse.getMonth('201805')).toEqual([2, 2, 2, 1, 2, 2, 2]);
    expect(getCalendarResponse.getMonth('201806')).toEqual([3, 3, 0, 3, 3, 3, 3]);
    expect(getCalendarResponse.getMonth('201807')).toEqual([3, 3, 3, 3, 3, 0, 3]);
  });
});
