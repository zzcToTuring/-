add=(a,b)=>{
    if (a===undefined){
        a=1
    }
    if (b===undefined){
        b=1
    }
    console.log( a+b)
}
add(5)
//默认参数值
add2=(a=1,b=2)=>console.log(a+b)

add2()
