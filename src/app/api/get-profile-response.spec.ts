import {GetProfileResponse} from './get-profile-response';

describe('GetProfileResponse', () => {
  let getProfileResponse: GetProfileResponse;
  let data: object;

  it('Name and period matches', () => {
    const name = 'Tatiana';
    const period = 28;
    data = {
      name: name,
      period: period,
      success: true,
      errors: []
    };
    getProfileResponse = new GetProfileResponse(data);

    expect(getProfileResponse.name).toBe(name);
    expect(getProfileResponse.period).toBe(period);
  });
});
