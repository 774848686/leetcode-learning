import code01 from '../../code/myself/code-01';

test('code-test', () => {
  // expect(code01('00110011')).toBe('0011,01,1100,10,0011,01')
  expect(code01("00110")).toBe('0011,01,10')
})
