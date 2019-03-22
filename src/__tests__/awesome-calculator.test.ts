import { AwesomeCalculator } from "../awesome-calculator";

test('calculator test term validation', () => {
  expect(() => AwesomeCalculator.calculate('(5.5/3)'))
    .toThrow(new Error('invalid term'));
});

test('calculator test addition', () => {
  expect(AwesomeCalculator.calculate('1+5'))
    .toEqual(6);
  expect(AwesomeCalculator.calculate('66+12'))
    .toEqual(78);
});

test('calculator test subtraction', () => {
  expect(AwesomeCalculator.calculate('7-8'))
    .toEqual(-1);
  expect(AwesomeCalculator.calculate('34-6'))
    .toEqual(28);
});

test('calculator test multiplication', () => {
  expect(AwesomeCalculator.calculate('4*3'))
    .toEqual(12);
  expect(AwesomeCalculator.calculate('-5*7'))
    .toEqual(-35);
});

test('calculator test division', () => {
  expect(AwesomeCalculator.calculate('4/2'))
    .toEqual(2);
  expect(AwesomeCalculator.calculate('35/5'))
    .toEqual(7);
  expect(AwesomeCalculator.calculate('10/3'))
    .toBeCloseTo(3.3, 0.000001);
});

