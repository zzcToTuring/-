//使用原始的方法进行查找的操作
const data=[
    {
        type:"1",
        value:100
    },
    {
        type:"2",
        value:200
    },
    {
        type:"3",
        value:300
    }
]
//查找类型和value
for (let i = 0; i < data.length; i++) {
    if (data[i].type==='1'&&data[i].value===100){
        console.log(data[i])
    }
}

//--------使用简单的方法进行完成----------
let temp=data.find(data=> data.type==='2'&&data.value===200)
console.log(temp)
