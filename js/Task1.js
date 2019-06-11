/*Task 1*/
/*First Method to show the name and age in the console */
var person= { name : 'Moez',
 profession : 'teacher',
 age:25
 };
 function affichage (){
   console.log(person.name + ' ' + person.age + ' ' +'ans');
}
 affichage();
/*First Method :Another Essai with  arrow function(Es6)*/
/*
let person={name:'Moez',
    profession: 'teacher' ,
    age:25
};
affichage = () =>console.log(person.name + ' ' + person.age + ' ' +'ans');
affichage();
*/


/*Second Method to show the name and age in the console*/

var person={name : 'Moez',
  profession : 'teacher',
  age:25 };
 function affichage (){
   console.log(person['name'] + ' ' + person['age']);
 }
 /*Second Method : Another Essai with  arrow function (Es6)*/
/*
let person={name : 'Moez',
   profession : 'teacher',
   age:25 };
affichage = () =>console.log(person['name']+ ' ' + person['age']);
affichage ();
*/
