import mergeArr from '../../code/array/lession03'

test('mergeArr(23)', () => {
    expect(mergeArr('23')).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
})
test('mergeArr("")', () => {
    expect(mergeArr('')).toEqual([])
})
test('mergeArr("1")', () => {
    expect(mergeArr('')).toEqual([])
})
test('mergeArr("2")', () => {
    expect(mergeArr('2')).toEqual(["a","b","c"])
})