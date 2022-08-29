//使用正则表达式进行匹配能更简单的完成要求
const str="12345this67is89a20test"
const result=str.replace(/[^0-9]/g,"")
console.log(result)
