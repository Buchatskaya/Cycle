export class SetCycleDateResponse {
  readonly needsConfirmationField = 'needsConfirmation';
  readonly messageField = 'message';

  private _needsConfirmation: boolean;
  private _message: string | null;

  constructor(data: object) {
    if (!data.hasOwnProperty(this.needsConfirmationField)) {
      throw new Error('missing property `' + this.needsConfirmationField + '`');
    }
    if (!data.hasOwnProperty(this.messageField)) {
      throw new Error('missing property `' + this.messageField + '`');
    }

    this._needsConfirmation = data[this.needsConfirmationField];
    this._message = data[this.messageField];

    if (this._needsConfirmation && null === this._message) {
      throw new Error('A confirmation is needed, but there is no text message');
    }
    if (!this._needsConfirmation && null !== this._message) {
      throw new Error('Confirmation is not required, but the message is not null');
    }
  }

  get needsConfirmation(): boolean {
    return this._needsConfirmation;
  }

  get message(): string | null {
    return this._message;
  }
}
