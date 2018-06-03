export class GetProfileResponse {
  readonly nameField = 'name';
  readonly periodField = 'period';

  private _name: string;
  private _period: number;

  constructor(data: object) {
    if (!data.hasOwnProperty(this.nameField)) {
      throw new Error('missing property `' + this.nameField + '`');
    }
    if (!data.hasOwnProperty(this.periodField)) {
      throw new Error('missing property `' + this.periodField + '`');
    }

    this._name = data[this.nameField];
    this._period = data[this.periodField];
  }

  get name(): string {
    return this._name;
  }

  get period(): number {
    return this._period;
  }
}
