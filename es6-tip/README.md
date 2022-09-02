## 前面的文件都是展示了一些基础的JavaScript的代码,在本文件中,在基础的JavaScript之上,有一些小技巧,在开发的过程中能帮助我们简单快速的解决问题

### 01 随机打乱

 使用sort方法,随机打乱一个数组

 使用原生的方法,从数组中随机取一个元素

### 02 过滤
 
 过滤,使用正则表达让一串字符只留下自己想要的元素

### 03 十进制转其他进制
 
 巧用toString的第二个参数达到此效果

### 04 ===与 ==
 
 展示了===与==在一些情况上的差别

### 05 合并多个对象
 
 使用展开表达式达到合并多个对象的方式

### 06 交换变量
 
 使用es6的语法,交换变量

### 07 if多个条件的写法
 
 使用include的数组方式使得省略了写if时的列举

### 08 undefined 与 null

 使用undefined和null的一些机制,使得在分配变量时要是分配的变量没有值,可以在后面设置默认值,避免出错

### 09 多个变量的分配

 使用数组的赋值方式能对多个变量分配进行简写
 
### 10 巧用and运算符

 react中经常使用到的&&运算法来简写,在原生的JavaScript也能正常的使用

### 11 for循环的语法糖

 在基础部分存在的,for in 和for of 属于for循环的语法糖,可以使用其完成一些遍历操作的简化

### 12 短函数的使用

 有点类似于07 获得函数的值,使用括号表示立即执行函数

### 13 Switch的简写

 使用对象的方式对原生的Switch进行简写

### 14 默认参数值

 es6的方法,给数组中的参数默认值

### 15 模板语法

 es6的模板语法

### 16 字符转换成数字

 以前使用js的方法可以达到的效果,现在使用一点加减法的运算机制即可简单达成

### 17 Array.find

 在array方法中的一种,能得出需要条件的item项

### 18 对象转化成数组
 
 使用Object.entries的方法,能把对象转化成数组,与实际的有所偏差但是能达到相关的效果
 
 使用Object.values的方法,也能把对象转化为数组,能省略key部分,直接展示value

### 19 对象的冻结

 使用object的相关方法能使得对象冻结,被冻结的对象不能添加修改和删除,实现真实意义上的冻结
 
 但是原生的方式只能达到浅冻结,要达到深冻结可以参考其中的自定义方法,里面有function达到深度冻结对象的效果


### 20 保留指定位小数&数组的最值

 使用num的toFixed的方式能指保留小数的位数(一般都是四舍五入)
 
 使用展开运算法,能够使用Math.max的方式来判断最大值(最小值同理)

### 21 删除数组or删除重复元素

 删除重复元素使用set集合方法可以实现
 删除数组可以使length=0,这样的话没有索引,会触发垃圾回收机制
 