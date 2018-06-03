import {PutProfileRequest} from './put-profile-request';

describe('PutProfileRequest', () => {
  let name: string;
  let period: number;
  let putProfileRequest: PutProfileRequest;

  it('Name and period matches', () => {
    name = 'Tatiana';
    period = 28;
    putProfileRequest = new PutProfileRequest(name, period);

    expect(putProfileRequest.name).toBe(name);
    expect(putProfileRequest.period).toBe(period);
  });
});
