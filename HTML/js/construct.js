function Person(name,age,nationality){
    this.name = name;
    this.age = age;
    this.nationality = nationality;

    this.identitiy = function(){
        console.log(this.name +" "+this.age+" "+this.nationality)
    }
}

function Franch(name,age,nationality){
    Person.call(this,name,age,nationality);
}
function Armenian(name,age,nationality,address){
    Person.call(this,name,age,nationality);
    this.address = address;
}
function German(name,age,nationality){
    Person.call(name,age,nationality);
}
let franch = new Franch("Fabien",28,'franch')
console.log(franch);
let arm = new Armenian("Armen",25,'armenian',"Yerevan");
console.log(arm);
let german = new Person("Nicola",33,'german');
german.identitiy();
console.log(german);