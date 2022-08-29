//------------如果有多个符合要求的条件,我们可以使用include的方法-------------------
let a="1"
if (a==="1"||a==="2"||a==="3"){
    console.log("....")
}
//使用简写的方法可以写成
if (["1","2","3"].includes(a)){
    console.log("-------")
}


//-------- if为真-简写------
if (a==="1"){
    console.log("T")
}else {
    console.log("F")
}
console.log(a==="1"?"T":"F")
