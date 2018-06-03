export class GetCalendarResponse {
  readonly yearMonthField = 'yearMonth';

  private _yearMonth: object;
  private _monthIndexes: string[];

  constructor(data: object) {
    if (!data.hasOwnProperty(this.yearMonthField)) {
      throw new Error('missing property `' + this.yearMonthField + '`');
    }

    this._yearMonth = data[this.yearMonthField];

    this._monthIndexes = Object.keys(this._yearMonth);
  }

  public getMonth(monthIndex:string): object {
    return this._yearMonth[monthIndex];
  }
  get monthIndexes(): string[] {
    return this._monthIndexes;
  }
}
