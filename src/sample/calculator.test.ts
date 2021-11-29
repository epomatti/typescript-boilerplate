import { Calculator } from "./calculator";

test('two plus two is four', () => {
  const result = new Calculator().sum(2, 2);
  expect(result).toBe(4);
});