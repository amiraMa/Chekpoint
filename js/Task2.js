/*Task2*/
/*Create a object'person'with another method with constructor function*/
function person (name,profession,age){

  this.name=name;
  this.profession=profession;
  this.age=age;

}
let person1=new person('Moez','teacher','25');
console.log(person1.name + ' ' + person1.age);
