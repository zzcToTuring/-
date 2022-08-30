let arr=[1,2,3,4,5]
arr=arr.sort(()=>0.5-Math.random())
console.log(arr)

//从数组中随机选择一个值
let arr2=[1,2,3,4,5,6,7]
const rand=(arr)=>arr[Math.floor(Math.random()*arr.length)]
console.log(rand(arr2))
