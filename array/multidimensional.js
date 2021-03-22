/*
 * @Author: your name
 * @Date: 2020-10-21 09:48:03
 * @LastEditTime: 2020-10-21 09:56:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \instance-deployd:\JavaScript\array\mutildimensional.js
 */
let arr = [];
for(let i = 0; i < 3; i++){
    arr[i] = [];
    for(let j = 0; j < 3; j++){
        arr[i][j] = []
        for(let k = 0; k < 3; k++){
            arr[i][j][k] = i + j + k
        }

    }
}
console.log(arr)

function printArrItem(arr){
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            printArrItem(arr[i])
        }else{
            console.log(arr[i])
        }
    }
}
printArrItem(arr)