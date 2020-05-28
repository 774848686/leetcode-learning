export default (str)=>{
    console.log(str.match(/[\w']+/g))
    // 备注 使用split(' ') 用时要优于正则匹配
    return str.split(/\s/g).map(item=>{
       return item.split('').reverse().join('');
    }).join(' ')
}