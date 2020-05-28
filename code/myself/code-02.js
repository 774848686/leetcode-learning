function getGCD(a, b) {
    const isMax = a > b;
    let r = isMax ? a % b : b % a;
    if (!r) {
        return isMax ? b : a;
    }else{
        return getGCD(isMax ? b : a,r)
    }
}
// 思路就是 a = c*b+d; 如果d=0；那么最大公约数就是b；如果d>0,则b = e*d+f ...以此递归，直到余数为0；返回该乘数即可
function getGCD_fy(a, b) {
    if (b===0) {
        return a
    }else{
        return getGCD(b,a%b)
    }
}
console.log(getGCD(3,9),getGCD_fy(3,9))