/**
 * 通过#关键字，可以创建私有字段或者方法，不能在外部访问，只能在内部访问
 * 类似于java中的private
 */

class User{
    constructor() {
    this.school="野鸡大学";
    }
    name="user_test";//正常的方式定义
    #age=18;//使用私有方式定义的
    getAge(){
        return this.#age;
    }
}
const user=new User()
console.log(user.school)
console.log(user.name)
console.log(user.getAge())
//console.log(user.#age) //Private field '#age' must be declared in an enclosing class
