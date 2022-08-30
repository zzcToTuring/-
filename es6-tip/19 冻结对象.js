let test={
    name:"zs",
    age:18
}
//使用方式冻结对象,对象不会发生改变
Object.freeze(test)
test.name="ls"
test.age=20
console.log(test)


//没有解冻的方法,只能使用复制的方式来达到解冻的效果
let test1=JSON.parse(JSON.stringify(test))
test1.name="ls"
console.log(test1)

/**
  冻结:
    不能添加新属性
    不能删除已有属性
    不能修改已有属性的值
    不能修改原型
    不能修改已有属性的可枚举性、可配置性、可写性

  但是:
     只能浅冻结不能深冻结
     手写让其能够满足深冻结
 */
console.log("--------------------")
//示例--->只能浅冻结
let obj = {
    name: '张三',
    info: {
        a: 1,
        b: 2
    }
}
Object.freeze(obj)
obj.name="??"
obj.info.a="666"
console.log(obj)
console.log("------------")

//手写深冻结
function deepFreeze(obj){
    //获取所有的属性
    let propNames=Object.getOwnPropertyNames(obj)
    //遍历
    propNames.forEach(item=>{
        let prop=obj[item]
        if (prop instanceof Object){
            deepFreeze(prop)
        }
    })
    return Object.freeze(obj)
}
//使用手写的深冻结,直接全部冻结了
deepFreeze(obj)
console.log(obj)
obj.name="gg"
obj.info.a="888"
console.log(obj)
