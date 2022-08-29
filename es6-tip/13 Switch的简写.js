test1=()=>{
    console.log(1)
}
test2=()=>{
    console.log(2)
}
d=()=>{
    console.log("default")
}
switch (1){
    case 1:
        test1()
        break
    case 2:
        test2()
        break
    default:
        d()
}

//使用简写的方式
let temp={
    1:test1,
    2:test2,
}
//tip:要是没有default选项,可以写成&&表达式的形式
temp[1]?temp[1]():d()

