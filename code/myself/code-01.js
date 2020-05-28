// 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。
//重复出现的子串要计算它们出现的次数。

// 输入: "00110011"
// 输出: 6
// 解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。

// 思路 根据长度进行遍历； 然后按照偶数进行截取 然后对这个字符串进行/2 两边去重复得到不同的值
export default (str)=>{
    let len = str.length;
    let resultArr = [];
    for(let i=0;i<len;i++){
        let index = 2;
        while(index<=len-i){
            let tempStr,tempStrlen,tempStrLeft,tempStrght;
             tempStr = str.substr(i,index);
             tempStrlen = tempStr.length;
             tempStrLeft = tempStr.substr(0,tempStrlen/2);
             tempStrght = tempStr.substr(tempStrlen/2,tempStrlen/2);
             index+=2;
            if(tempStrLeft.includes('0') && tempStrLeft.includes('1') ) continue;
            if(tempStrght.includes('0') && tempStrght.includes('1')) continue;
            if(tempStrLeft.includes('0') && !tempStrght.includes('0')) {
                resultArr.push(tempStr);
            };
            if(tempStrLeft.includes('1') && !tempStrght.includes('1')) {
                resultArr.push(tempStr);
            };
            
        }
        
    }
    return resultArr.join(',');
}