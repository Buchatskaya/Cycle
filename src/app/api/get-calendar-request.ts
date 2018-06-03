export class GetCalendarRequest {
  readonly monthStartField = 'monthStart';
  readonly monthCountField = 'monthCount';

  private _monthStart: Date;
  private _monthCount: number;


  constructor(monthStart: Date, monthCount: number) {
    this._monthStart = monthStart;
    this._monthCount = monthCount;
  }

  get monthStart(): Date {
    return this._monthStart;
  }

  get monthCount(): number {
    return this._monthCount;
  }
}
