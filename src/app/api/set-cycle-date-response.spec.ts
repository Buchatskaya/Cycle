import {SetCycleDateResponse} from './set-cycle-date-response';

describe('SetCycleDateResponse', () => {
  let setCycleDateResponse: SetCycleDateResponse;
  let data: object;

  it('needsConfirmation and message matches', () => {
    const needsConfirmation = true;
    const message = 'Вы уверены, что ввели правильную дату?';
    data = {
      needsConfirmation: needsConfirmation,
      message: message,
      success: true,
      errors: []
  };
    setCycleDateResponse = new SetCycleDateResponse(data);

    expect(setCycleDateResponse.needsConfirmation).toBe(needsConfirmation);
    expect(setCycleDateResponse.message).toBe(message);
  });

  it('needsConfirmation and message matches', () => {
    const needsConfirmation = false;
    const message = null;
      data = {
        needsConfirmation: needsConfirmation,
        message: message,
        success: true,
        errors: []
      };
    setCycleDateResponse = new SetCycleDateResponse(data);

    expect(setCycleDateResponse.needsConfirmation).toBe(needsConfirmation);
    expect(setCycleDateResponse.message).toBe(message);
  });
});
