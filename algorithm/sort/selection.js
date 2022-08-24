/**
 * 选择排序
 *    选择排序是一种直观的排序方式，原理：在未排序的序列中找到最小（大）元素，存放到排序序列的
 * 起始位置，然后再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列末尾，直到所有
 * 元素均排序完成
 */

const selectionSort = function(arr) {
  console.time('选择排序时间')
  const { length = 0 } = arr;
  let temp,minIndex;
  for(let i = 0; i < length - 1; i++) {
    minIndex = i;
    for(let j = i + 1; j < length; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.timeEnd('选择排序时间')
  return arr
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

console.log(selectionSort(arr))