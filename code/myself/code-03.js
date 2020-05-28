// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:
// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
export default arr => {
    if(arr.length===0) return '';
    const lengthArr = arr.map(item => item.length);
    const minItem = arr[lengthArr.indexOf(Math.min(...lengthArr))];
    let result = '';
    for (let i = 1; i < minItem.length; i++) {
        result = minItem.substring(0, i);
        const isMatch = arr.every(item => item.substring(0, i).includes(result));
        if (!isMatch) {
            result = minItem.substring(0, i - 1);;
            break;
        }
    }
    return result;
}
// 优化版
// 解释: 输入不存在公共前缀。
let beautify =  arr => {
    if(arr.length===0) return '';
    let result = '';
    let [a,...b] = arr;
    for (let i = 1; i < a.length; i++) {
        result = a.substring(0, i);
        const isMatch = arr.every(item => item.substring(0, i).includes(result));
        if (!isMatch) {
            result = a.substring(0, i - 1);;
            break;
        }
    }
    return result;
}
// 优化版（copy）
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return "";
    //优化后 执行用时:56ms,击败了98.58% 内存消耗:33.7MB,击败了96.97%
    //直接先找出最短字符串长度 再使用深度遍历法
    let len = strs[0].length;
    for(let str of strs){
        len = Math.min(len, str.length);
    }
    let s = strs[0].substr(0, len), idx = 1;
    while(idx < strs.length){
        while(strs[idx].indexOf(s)){
            s = s.substr(0, s.length - 1);
            if(!s.length) { return "" }
        }
        idx++;
    }
    return s;
}