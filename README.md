# basic-JavaScript
 一些基础的JavaScript的学习代码


--正式开启对readme文档修改


<a name="nt6hk"></a>
## 类型与属性
<a name="jsGjQ"></a>
### 类型介绍
在JS中，分为一下几种基本类型<br />使用**typeof**，能检测不同字段的类型
<a name="yy60p"></a>
#### **Number** 数值类型
与其他语言不同的是，js没有区分整数、小数类型，所有的数值类型都为Number

> 最大值：1.7976931348623157e+308	最小值：5E-324
> 当数值超过了数值能显示的最大值/最小值，会返回Infinity(正无穷)/-Infinity(负无穷)
> 使用typeof检查Infinity会返回number，NaN也是number类型，表示 NOT A NUMBER


其他类型**强制转化**为Number类型：

- **Number(X)**

针对字符串而言：<br />如果是纯数字的字符串，则直接将其转换为数字<br />如果字符串中有非数字的内容，则转换为NaN<br />如果字符串是一个空串或者是一个全是空格的字符串，则转换为0<br />针对Boolean而言：<br />true 转成 1，false 转成 0<br />针对Null而言：转化为0<br />针对其他类型，如function、undefined而言，转化为NaN

- **parseInt(X)/parseFloat(X)**

仅针对**字符串形式**而言，将字符串转化为整数(可能会损失精度)或浮点数类型<br />当字符不可转化时，会返回NaN
<a name="TvmV5"></a>
#### **Null** 空值类型
null这个值专门用来表示一个为**空**的对象，使用typeof检查类型时，**会返回object**(属于一种特殊的对象类型)
<a name="VKBK1"></a>
#### **undefined**类型
当声明一个变量，但是并不给变量赋值时，它的值就是undefined<br />使用typeof检查一个undefined时也会返回undefined
<a name="mWe9j"></a>
#### **String类型**
字符串类型，最常用的一种类型
<a name="BgQvQ"></a>
#### **Boolean**类型
布尔类型，只有true和false两个值
<a name="ERPto"></a>
#### **Object**对象类型
<a name="yOPr6"></a>
#### **Symbol**类型
<a name="moDQj"></a>
#### **bigInt**大数据类型
