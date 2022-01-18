


let Singleton = function(name) {
  this.name = name;
}

Singleton.instance = null;
Singleton.prototype.getName = function() {
  // console.log(this.name);
}

Singleton.getInstance = function(name) {
  console.log(this)
  if(!this.instance) {
    this.instance = new Singleton(name)
  }
  return this.instance
}

const a = Singleton.getInstance('test');
const b = Singleton.getInstance('test2')
// console.log(a);
// console.log(b);
// console.log(a === b);