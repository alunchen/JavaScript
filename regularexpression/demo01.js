/*
 * @Author: your name
 * @Date: 2020-09-21 14:43:05
 * @LastEditTime: 2021-01-13 14:31:46
 * @LastEditors: Please set LastEditors
 * @Description: 正则表达式 位置匹配
 * @FilePath: \instance-deployd:\JavaScript\regularexpression\demo01.js
 */
/**
 * \b       
 *      匹配一个词的边界（单词与符号的边界）。一个词的边界就是一个词不被另外一个“字”字符跟随的位置或者前面跟其他“字”字符的位置，
 * 例如在字母和空格之间。注意，匹配中不包括匹配的字边界。换句话说，一个匹配的词的边界的内容的长度是0。
 */
/**
 * 单词边界就是单词和符号之间的边界
 *  这里的单词可以是中文字符,英文字符,数字；符号可以是中文符号,英文符号,空格,制表符,换行
 * 
 */
let reg = /\b/;
let str = '(123asd,qwe.456)';
let arr = str.split(reg);
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    //console.log(element)
}


/**
 * 空格并不是边界 空格与字母a之间的那个才叫边界 
 */
let reg2 = /\ba\b/;
let str2 = ' a ';
let arr2 = str2.split(reg2);
for (let index = 0; index < arr2.length; index++) {
    const element = arr2[index];
    //console.log(element, index)
}

/**
 * \B  匹配一个非单词边界（非单词与符号的边界）, 符号与符号的边界，单词与单词的边界
 */

let reg3 = /\B/;
let str3 = '(123asd,qwe.456)';
let arr3 = str3.split(reg3);
for (let index = 0; index < arr3.length; index++) {
    const element = arr3[index];
    //console.log(element)
}

let reg4 = /\B|\b/;
let str4 = '(123asd,qwe.456)';
let arr4 = str4.split(reg4);
for (let index = 0; index < arr4.length; index++) {
    const element = arr4[index];
    //console.log(element)
}

let num = '1234567890';
let newReg = /\B(?=(?:\d{3})+$)/g;
let arr5 = num.split(newReg);
//console.log(num.replace(newReg, ','))
let result = newReg.exec(num);
//console.log(result)
//console.log(arr5)
//console.log('123123123123123123123123'.split(/(?!^)(?=(\d{3})+$)/g,))

//console.log('123456789'.replace(/^\d{6, 12}$/g, '#'))

function regularExpression(string, reg){
    let testString = `test: ${reg.test(string)}`;
    console.log(testString)
    let replaceString = `replace: ${string.replace(reg, '#')}`
    console.log(replaceString)
}
regularExpression('abcc', /^[a-z]{3,6}$/g)