// let createCounter = function(n) {
//     return function() {
//         return n++;
//     };
// };
//
// const counter = createCounter(10)
// counter() // 10
// counter() // 11
// counter() // 12

//获取最大入住的天数
let start=['2023-09-11','2023-09-12','2023-05-11','2023-06-11']
let end=['2023-09-12','2023-10-11','2023-08-11','2023-8-10']
let max_time=0;
start.forEach((i,v)=>{
    let start_date=new Date(i)
    let end_date=new Date(end[v])
    let temp=(end_date-start_date)/(1000*3600*24)
    if (max_time<temp){
        max_time=temp
    }
})
console.log(max_time)


//获取最早的提醒时间
let min_time=end[0]
end.forEach((i,v)=>{
    if (min_time>i){
        min_time=i
    }
})
console.log(min_time)

