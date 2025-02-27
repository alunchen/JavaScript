// arguments 是一个对应于传递给函数参数的类数组对象

/**
 * 
 * “类数组”意味着 arguments 有 长度 属性 并且属性的索引是从零开始的，但是它没有 Array的 内置方法，
 * 例如 forEach() 和 map()都是没有的。
 * 
 * 
 * 
 * arguments对象是所有（非箭头）函数中都可用的局部变量。你可以使用arguments对象在函数中引用函数的参数。
 * 此对象包含传递给函数的每个参数，第一个参数在索引 0 处。例如，如果一个函数传递了三个参数，你可以以如下方式引用他们
 * 
 * 
 *  arguments 对象不是一个Array，它类似于Array，但除了length属性和索引元素之外没有任何Array属性，例如 pop()、push()等
 *  但是它可以转换成一个真正的Array
 * 
 *   var args = Array.prototype.slice.call(arguments)
 *   var args = [].slice.call(arguments)
 * 
 *  ES 2015
 *   const args = Array.from(arguments)
 *   const args = [...arguments]
 */

function fn(...args) {
  console.log('arguments', arguments)
  console.log('args', args)
}

// fn(1, 3)


function debounce(fn, wait) {
  let timer = null;
  return function() {
    const ctx = this;
    const args = arguments
    if(timer !== null) {
      clearTimeout(timer)
    }

    setTimeout(() => {
      fn.apply(ctx, args)
    }, wait);
  }
}


const fn2 = debounce(fn, 1000);
fn2(111,222,333)
