//使用传统的for循环
let data=[1,2,3,4]
for (let i = 0; i < data.length; i++) {
    console.log(data[i])
}
console.log("----------------")
//使用foreach循环index
for (let i in data) {
    console.log(data[i])
}
//使用for of循环item
console.log("_--------------")
for (let i of data) {
    console.log(i)
}
