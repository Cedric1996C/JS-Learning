function Supertype(name){
    this.name = name;
    this.friend = ['a', 'b', 'c'];
}

Supertype.prototype.sayName = function(){
    console.log(this.name)
}

function Subtype(name, age){
    Supertype.call(this, name);
    this.age = age; 
}

Subtype.prototype = new Supertype();

Subtype.prototype.sayAge = function(){
    console.log(this.age);
}

