import code03 from '../../code/myself/code-03';

test('code-test', () => {
  expect(code03(["dog","racecar","car"])).toBe('')
  expect(code03(["flower","flow","flight"])).toBe('fl')
})
