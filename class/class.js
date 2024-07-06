function Animal(type, name, age, sex) {
  this.type = type;
  this.name = name;
  this.age = age;
  this.sex = sex
}

Animal.prototype.print = function() {
  if(!(this instanceof Animal)) {
    // throw new Error('print is not a constructor')
    throw 'print is not a constructor'
  }
  console.log(`类型：`, this.type)
  console.log(`姓名：`, this.name)
  console.log(`年龄：`, this.age)
  console.log(`性别：`, this.sex)
}

const a = new Animal('狗', '大白', '3', '公');
console.log(a)

const b = new a.print();
console.log(b)