//原始写法,有点类似于三元表达式中的案例
let test="1"
test1=()=>{
    console.log(1)
}
test2=()=>{
    console.log(2)
}
if (test==="1"){
    test1()
}else{
    test2()
}

console.log("---------------");
//获得函数的值,加一个括号表示执行
(test==="1"?test1:test2)()
