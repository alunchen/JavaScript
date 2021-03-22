/*
 * @Author: your name
 * @Date: 2021-01-13 10:41:10
 * @LastEditTime: 2021-01-13 14:31:24
 * @LastEditors: Please set LastEditors
 * @Description: 正则表达式 字符匹配
 * @FilePath: \instance-deployd:\JavaScript\regularexpression\demo03.js
 */

/**
 * 横向模糊匹配
 *      正则可匹配的字符的长度不是固定的，可以是多种情况
 *      {m, n}、? 、+ 、*;
 */

let regex = /ab{2,5}c/g;
let str = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc';
console.log(str.match(regex))

/**
 *      NOTE： 案例中用的正则是 /ab{2,5}c/g，其中 g 是正则的一个修饰符。表示全局匹配，
 * 即，在目标字符串中按顺序找到满足匹配模式的所有子串，强调的是“所有”，而不只是“第一个”。
 * g 是单词 global 的首字母。
 * 
 */



/**
 *  纵向模糊匹配
 *  一个正则匹配的字符串，具体到某一位字符时，它可以不是某个确定的字符，可以有多种可能
 * 
 */
let regex2 = /a[123]b/g;
let str2 = 'a0b a1b a2b a3b a4b';
console.log(str2.match(regex2))



/**
 * 字符组
 *   需要强调的是，虽叫字符组（字符类），但只是其中一个字符。
 *  例如 [abc]，表示匹配一个字符，它可以是 "a"、"b"、"c" 之一。
 */



/**
 * 范围表示法
 *      比如 [123456abcdefGHIJKLM]，可以写成 [1-6a-fG-M]。用连字符 - 来省略和简写。
 *      因为连字符有特殊用途，那么要匹配 "a"、"-"、"z" 这三者中任意一个字符，该怎么做呢？
    不能写成 [a-z]，因为其表示小写字符中的任何一个字符。可以写成如下的方式：[-az] 或 [az-]
    或 [a\-z]。 即要么放在开头，要么放在结尾，要么转义。总之不会让引擎认为是范围表示法就行了。
 */


/**
 * 排除字符组
 *      纵向模糊匹配，还有一种情形就是，某位字符可以是任何东西，但就不能是 "a"、"b"、"c"。
    此时就是排除字符组（反义字符组）的概念。例如 [^abc]，表示是一个除 "a"、"b"、"c"之外
    的任意一个字符。字符组的第一位放 ^（脱字符），表示求反的概念。当然，也有相应的范围表示法。
 */



// 匹配任意字符
//  /\d\D\w\W\s\S.[^]/

/**
 * 贪婪匹配与惰性匹配
 *      贪婪的，它会尽可能多的匹配。
 *      而惰性匹配，就是尽可能少的匹配：
 *      通过在量词后面加个问号就能实现惰性匹配，因此所有惰性匹配情形如下：
 * 
            惰性量词	贪婪量词
            {m,n}?	    {m,n}
            {m,}?	    {m,}
            ??      	?
            +?	        +
            *?	        *
 */
let regex3 = /\d{2,5}/g;
// let regex3 = /\d{2,5}?/g;
let str3 = '123 1234 12345 123456';
console.log(str3.match(regex3))


/**
 * 分支结构
 *      一个模式可以实现横向和纵向模糊匹配。而多选分支可以支持多个子模式任选其一。
 *      具体形式如下：(p1|p2|p3)，其中 p1、p2 和 p3 是子模式，用 |（管道符）分隔，表示其中任何之一。
    例如要匹配字符串 "good" 和 "nice" 可以使用 /good|nice/。
 */

let regex4 = /good|nice/g;
let str4 = 'good idea, nice try';
console.log(str4.match(regex4))

// let regex5 = /good|goodbye/g;
let regex5 = /goodbye|good/g;
let str5 = 'goodbye';
console.log(str5.match(regex5))
// 分支结构也是惰性的，即当前面的匹配上了，后面的就不再尝试了。



// 匹配十六进制颜色值

//  #ffbbad  #Fc01DF  #FFF #ffE

let regular = /#[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/g;
let string = '#ffbbad  #Fc01DF  #FFF #ffE';
console.log(string.match(regular))

// 匹配时间
// 23:59   02:05

let regular2 = /([01][0-2]|[2][0-4]):[0-5][0-9]/g;
let string2 = '23:59   02:05';
console.log(string2.match(regular2))

// 匹配日期
// yyyy-MM-dd

let regular3 = /\d{4}-(0[1-9]|1[0-2])-([12][0-9]|0[1-9]|3[0-1])/g;
let string3 = '2020-01-13  2020-01-14';
console.log(string3.match(regular3))

// window 操作系统文件路径
/**
 *  要求匹配
 *  F:\study\javascript\regex\regular expression.pdf
    F:\study\javascript\regex\
    F:\study\javascript
    F:\
 */
let regular4 = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/;