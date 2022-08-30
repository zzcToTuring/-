const num=[1,2,3,4,5]
//要是数组不在使用,我们直接把他的长度设置为0,这样就达到了清理不用的数组的目的
num.length=0
console.log(num)

const test=[1,2,3,1,2,3,4,5]
//清楚重复的元素
clear=(arr)=>{
    return [...new Set(arr)]
}
console.log(clear(test))
