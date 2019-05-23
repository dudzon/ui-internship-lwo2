// import { validateCreditCard } from './credit-card-validator';

xdescribe('Credit Card Number Validator', () => {
  test('Valid cases', function() {
    [
      '4929 5675 6951 2294',
      '4535 8684 9423 3162',
      '4485 4003 6722 6410',
      '6011 0217 8173 6459',
      '6011 7470 8429 9254',
      '6011 0857 8301 5782',
      '3028 8514 0741 73',
      '30130631059077',
      '30236866996238',
      '6709126552372686',
      '6771085100479497',
      '6709819869130538'
    ].forEach(function(item) {
      expect(validateCreditCard(item)).toBeTruthy();
    });
  });

  test('Invalid cases', function() {
    [
      '',
      'abc',
      '11111111111111111111111111',
      '111111111',
      '050 123 45 67',
      '4929 5675 6951 2297',
      '30130631059079',
    ].forEach(function(item) {
      expect(validateCreditCard(item)).toBeFalsy();
    });
  });
});
