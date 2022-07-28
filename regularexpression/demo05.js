/*
 * @Author: v_alunchen v_alunchen@tencent.com
 * @Date: 2022-07-28 11:08:00
 * @LastEditors: v_alunchen v_alunchen@tencent.com
 * @LastEditTime: 2022-07-28 11:11:39
 * @FilePath: \JavaScript\regularexpression\demo05.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const regStr = 'pai';
const arr = regStr.split('')
let str = ''
arr.forEach(key => {
  str = `${str}(${key})\\w*`
})
console.log(str);
const reg = new RegExp(str, 'i')
const text = 'Paris';
console.log(reg.exec(text))
