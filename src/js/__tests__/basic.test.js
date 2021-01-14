import Validator from '../basic';

test('correct data', () => {
  const result = new Validator().validateUsername('df5gd');
  expect(result).toBe(true);
});

test('incorrect data: 3 numbers in a row', () => {
  const result = new Validator().validateUsername('df55584gd');
  expect(result).toBe(false);
});

test('incorrect data: whitespace', () => {
  const result = new Validator().validateUsername(' lola');
  expect(result).toBe(false);
});

test('incorrect data: number at the end', () => {
  const result = new Validator().validateUsername('lola4');
  expect(result).toBe(false);
});

test('incorrect data: invalid date', () => {
  const result = new Validator().validateUsername('lol?a');
  expect(result).toBe(false);
});
