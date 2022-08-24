/**
 * 冒泡算法
 *    给定一列数   32  5  12  128  49  2
 *     两两比较 前比后大则换位
 *    第一轮排序   5  12  32  49  2  128  经过第一轮最大的数被推到最后位置
 *    第二轮排序   5  12  32  2   49
 *    第三轮排序   5  12  2   32
 *    第四轮排序   5  2   12
 *    第五轮排序   2  5
 * 
 *    https://github.com/damonare/Sorts
 */
const bubbleSort = function (arr) {
  console.time("执行时间：");
  const { length } = arr;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      let temp;
      if (arr[j] >= arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.timeEnd("执行时间：");
  return arr;
};

/**
 * 代码性能优化
 */
const bubbleSort2 = function (arr) {
  console.time("优化执行时间：");
  const { length } = arr;
  let i = length - 1;
  while (i > 0) {
    let pos = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        pos = j;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    i = pos;
  }
  console.timeEnd("优化执行时间：");
  return arr;
};
const bubbleSort3 = function (arr) {
  console.time("2.改进后冒泡排序耗时");
  let low = 0;
  let high = arr.length - 1; //设置变量的初始值
  let tmp, j;
  while (low < high) {
    for (j = low; j < high; ++j){
      //正向冒泡,找到最大者
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
    --high; //修改high值, 前移一位
    for (j = high; j > low; --j){
      //反向冒泡,找到最小者
      if (arr[j] < arr[j - 1]) {
        tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
      }
    }
    ++low; //修改low值,后移一位
  }
  console.timeEnd("2.改进后冒泡排序耗时");
  return arr;
};

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
const arr2 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
const arr3 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

console.log(bubbleSort(arr));
console.log(bubbleSort2(arr2));
console.log(bubbleSort3(arr3));

