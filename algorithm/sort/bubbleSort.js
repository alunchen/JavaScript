
/**
 * 冒泡算法
 *    给定一列数   32  5  12  128  49  2
 *     两两比较 前比后大则换位
 *    第一轮排序   5  12  32  49  2  128  经过第一轮最大的数被推到最后位置
 *    第二轮排序   5  12  32  2   49
 *    第三轮排序   5  12  2   32 
 *    第四轮排序   5  2   12
 *    第五轮排序   2  5   
 */
const arr = [1, 3, 4, 5, 2, 6, 9, 2, 6, 8, 7];

for(let i = 0; i < arr.length - 1; i++) {
  for(let j = 0; j < arr.length - 1 - i; j++) {
    let temp;
    if(arr[j] >= arr[j+1]) {
      temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
    }
  }
}

console.log(arr)