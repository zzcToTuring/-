/**
 * 使用 in 判断某个属性是否是对象的私有属性
 */

class User{
    constructor() {
        this.school="野鸡大学";
    }
    name="user_test";
    #age=18;
   test(){
       return #age in this
   }
}
const user=new User();
console.log(user.test())//true
console.log('#age'in user)//false 私有变量，怎么能访问到
console.log('name' in user)
