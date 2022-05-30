/**
 * 
 * @param {*} func 执行函数
 * @param {*} wait 延迟执行时间（毫秒）
 * @param {*} immediate -- true 表示立即执行（下次执行需要等待 wait 结束后，期间触发会刷新wait）
 *                      -- false 表示延迟执行 （等待wait 后执行，期间触发会刷新 wait）
 * @returns 
 */
function debounce(func, wait, immediate) {
  let timer;

  return function () {
      let context = this;
      let args = arguments;

      if (timer){
        clearTimeout(timer)
      };

      if (immediate) {
          var callNow = !timer;
          timer = setTimeout(() => {
              timer = null;
          }, wait)

          if (callNow) {
            func.apply(context, args)
          }
      } else {
          timer = setTimeout(function(){
              func.apply(context, args)
          }, wait);
      }
  }
}