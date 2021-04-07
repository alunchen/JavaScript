/*
 * @Author: your name
 * @Date: 2021-03-30 10:49:00
 * @LastEditTime: 2021-04-07 10:07:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \instance-deployd:\alunchen\JavaScript\util\util.js
 */

// 1. 随机布尔值
/**
 *      这个函数使用 Math.random() 方法返回一个布尔值（true 或 false）,
 * Math.random 将在 0 和 1 之间创建一个随机数，之后我们检查它是否高
 * 于或低于 0.5。这意味着得到真或假的几率是 50%/50%。    
 */
const randomBoolean = () => Math.random() >= 0.5;
// console.log(randomBoolean())


// 2. 检查日期是否为工作日
/**
 *       
 * 
 */
const isWeekday = (date) => date.getDay() % 6 !== 0;
// console.log(isWeekday(new Date(2020, 0, 11)));
// console.log(isWeekday(new Date(2021, 0, 10)))

// 3. 反转字符串
const reverseStr = (str) => str.split('').reverse().join('');
// console.log(reverseStr('hello world'))

// 4. 保留小数点(非四舍五入)
const toFixed = (n, fixed) => ~~(Math.pow(10, fixed)*n) / Math.pow(10, fixed);
// console.log(toFixed(20.123, 2))

// 5. 获取所有参数平均值
const average = (...args) => args.reduce((a, b) => a + b) / args.length;
// console.log(average(1, 2, 3, 4))

const getDataType = (data) => {
    const type = Object.prototype.toString.call(data);
    let result = type.match(/^\[object (\w+)\]$/);
    // String
    // Number
    // Null
    // Undefined
    // Object
    // Date
    // Array
    // RegExp
    // Function
    // Boolean
    // Symbol
    return result[1]
}

// getDataType('123');
// getDataType(123);
// getDataType(null);
// getDataType(undefined);
// getDataType({});
// getDataType(new Date());
// getDataType([]);
// getDataType(/\d/);
// getDataType(function(){});
// getDataType(true)

const deepClone = (data) => {    
    // const primitiveTypes = ['String', 'Number', 'Null', 'Undefined', 'Boolean', 'Symbol'];
    const referenceTypes = ['Object', 'Array', 'RegExp', 'Function', 'Date'];
    const type = getDataType(data);
    if(referenceTypes.indexOf(type) > -1){
        if(type === 'Object'){
            let obj = {};
            Reflect.ownKeys(data).forEach(i => {
                obj[i] = deepClone(data[i])
            })
            return obj
        }
        if(type === 'Array'){
            let arr = [];
            data.forEach(item => {
                arr.push(deepClone(item))
            })
            return arr
        }
        if(type === 'RegExp'){
            let pattern  = data.valueOf();
            let flags = '';
            flags += pattern.global?'g':'';
            flags += pattern.ignoreCase?'i':'';
            flags += pattern.multiline?'m':'';
            return new RegExp(pattern.source, flags)
        }
        if(type === 'Function'){
            // 1
            let cloneFn = new Function('return ' + data.toString())();
            // 2
            //let cloneFn = data.bind({});
            return cloneFn
        }
        if(type === 'Date'){
            let date = data.valueOf();
            return new Date(date)
        }
    } else{
        if(type === 'Undefined' || type === 'Null'){
            return data
        }else{
            return data.valueOf()
        }
    }
}