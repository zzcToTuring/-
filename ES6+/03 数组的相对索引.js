/**
 * 使用at 通过相对索引获取数组元素
 */

const arr=[1,2,3,4,5]
console.log(arr[0],arr[-1])
console.log(arr.at(0),arr.at(-1))

const str="this is a test!"
console.log(str.at(0),str.at(-1))
console.log(str.charAt(0))

//感觉并没有任何实质性的作用，数组的话可以直接索引,字符串的话也有其他的方法，都能达到使用的目的
