export default (str) => {
    //处理空
    if (str.length < 1) return [];
    // 输入一个'23',会映射到键盘的字母上且1为空；
    const alMap = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const code = str.split('').map(item => item && alMap[item]);
     // 如果只给了一个按键，直接把按键内容取出来并按单个字符分组就可以了（LeetCode测试用例）
  if (str.length < 2) return alMap[str].split('')
    // 生成一个['abc','def']
    const mergeEach = (target) => {
        let sub_zero = target[0],
            sub_one = target[1],
            result = [];
        for (let i = 0; i < sub_zero.length; i++) {
            for (let j = 0; j < sub_one.length; j++) {
                result.push(sub_zero[i] + sub_one[j]);
            }
        }
        target.splice(0, 2, result); // 关键的一步，将0，1 项替换成组合的项；之所以能够替换是因为字符串跟数组同可进行遍历
       
        if (target.length > 1) {
            mergeEach(target);
        }else{
            return result;
        }
        return target[0];
    }
    return mergeEach(code)
}