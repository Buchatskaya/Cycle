export class PutProfileRequest {
  readonly nameField = 'name';
  readonly periodField = 'period';

  private _name: string;
  private _period: number;


  constructor(name: string, period: number) {
    this._name = name;
    this._period = period;
  }

  get name(): string {
    return this._name;
  }

  get period(): number {
    return this._period;
  }
}
