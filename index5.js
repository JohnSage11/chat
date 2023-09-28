// // // // // // // // // // This is the first practical JS script

// // // // // // //                  //DATA TYPES
// // // // // // // // // //Data types
// // // // // // // // // //String data
// // // // // // // // // let Praise='DUMB PIP IN THESE LANDS';
// // // // // // // // // //Use "" for strings involving ' or ' midsentences
// // // // // // // // // let who = "I don't like you";

// // // // // // // // // //Boolean
// // // // // // // // // ratsAreCute=false;

// // // // // // // // // //Number
// // // // // // // // // let men=2000000;

// // // // // // // // // //Null
// // // // // // // // // let rats= null;

// // // // // // // // // //Undefined
// // // // // // // // // let pigeons;

// // // // // // //                //OBJECTS
// // // // // // // // // //Object Data types are great for storing ALL related data on a topic together to make code tidy
// // // // // // // // // // How to declare an Object

// // // // // // // // // const John = {
// // // // // // // // //     complexion: "Dark",
// // // // // // // // //     height: 5.9,
// // // // // // // // //     hardworking: true,
// // // // // // // // //     knownenemies: null,
// // // // // // // // // };

// // // // // // // // // console.log(John);

//  Template Literals
//  let man = 'Dark';
//  let tec = 'phones';
//  'there is a huge ' + man + ' with ' + tec +'.';
//  Using template literals we have
// `There is a huge ${man} with ${tec}.`;


// // //                    //ARRAYS
//How an array looks like
// let array = [true, '99', 13, null];
// adding elements
// / array[4] = 'Door';
// 'Door'
// array;
// // // (5)[true, '99', 13, null, 'Door']
//   array.push('me'); // adds 'me' to the last part of the array
// array.unshift('I too');
//      //Accessing elements
// // array[3];
// // Updating Elements
// //array[5] = "Changes";
//  array.pop();
// // // // // // // array.shift();
 // console.log(array);

//  let mau = "You don't know a thing!!!";
//  let x = mau.replace("don't", "DO NOT");
//  console.log(x);
//  Array slice and splice
// // Slice
// let business = [true, '99', 13, null, 'ladylike', 'efforts', 'A Plan'];
// business.slice(3,7);
//  let test1 = business.slice(3,7);
//  console.log(test1);
//  console.log(business);
// Splice
// let success = ['victory','rewards','outstanding','fulfillment'];
//  success.splice (-1,0);
//  test2 = success.splice (-1,0);
//  console.log(test2);
// DON'T USE SPLICE, IT MOIDFIES THE ORIGINAL ARRAY

// // // // // //                 //IF & ELSE 
// // // // // // let spider = 'Jumping browing';
// // // // // // let deadly = 'mandible spiders';

// // // // // // if (spider ==='black widow'){
// // // // // //     console.log('AVOID!!!');
// // // // // // } 
// // // // // // else if (deadly ==='the sun')
// // // // // // {
// // // // // //     console.log('Save yourselfs!');
// // // // // // }
// // // // // // else {
// // // // // //     console.log('Catch and study')
// // // // // // };

// // // // // // // And and Or conditions (&&,||)
// // // // // //   let condition1= true;
// // // // // //   let condition2= false;

// // // // // // //AND
// // // // // // if (condition1==true && condition2==true){
// // // // // //     console.log('This system works');
// // // // // // }
// // // // // // else{
// // // // // //     console.log ('Try again');
// // // // // // }

// // // // // // //OR
// // // // // // if (condition1==false || condition2== true){
// // // // // //     console.log("CORRECT");
// // // // // // }
// // // // // // else{
// // // // // //     console.log('Make another attempt');
// // // // // // }

// // // // //           //OBJECTS
// // // // // const myObject = {
// // // // //     name: 'Daniel Thrasher',
// // // // //     age: 27,
// // // // //     african: false,
// // // // //     heightInFeets: 5.9,
// // // // //     skills: "Pianist"
// // // // // };
// // // // // //CREATE
// // // // // // console.log(myObject);
// // // // // //READ
// // // // // // console.log(myObject.african, myObject.name);
// // // // // //UPDATE
// // // // // // myObject.caucasian = true;
// // // // // // console.log(myObject);
// // // // // //DELETE
// // // // // delete myObject.skills;
// // // // // console.log(myObject);
// // // //              //FOR LOOPS

// // // // //for(settings and conditions){
// // // // //     CODE TO RUN
// // // // // };
// // // // // let x ='JAVELIN'
// // // // // for (let i=0; i<x.length; i++){
// // // // //     console.log(x[i])
// // // // // };

// // // // // let alphabets ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// // // // // for (let i=0; i<26; i+=2){
// // // // // console.log(alphabets[i])
// // // // // };
// // // // // Iterating through complex objects with for loops
// // // // // const testObj=[
// // // // //     {
// // // // //         name: 'Samuel',
// // // // //         age: 24,
// // // // //         decent: 'African'
// // // // //     },
// // // // //     {
// // // // //         name: 'Gertrude',
// // // // //         age: 1024,
// // // // //         decent: 'Elvish'
// // // // //     }
// // // // // ]

// for (let i=0; i < testObj.length; i++){
//     console.log(`My name is ${testObj[i].name}, I am ${testObj[i].decent}`)
 // };

// Iterating through complex arrays
//  const airplanes = [['man','angel',77], ['Friend','Enemy',890]];
//  for (let i = 0; i<airplanes.length; i++){
//     let row = airplanes[i];
//     for (let j=0; j<row.length; j++){
//         console.log(row[j]);
//    }
// }
// // // //           //FUNCTIONS
// // // //Format function name(){COMMAND TO RUN;} name();
// // // // function log(){
// // // //     console.log(alert('Sup?'));
// // // // }
// // // // log();
// // // // const logMan = function(){
// // // //     console.log(alert('Bastard'));
// // // // } logMan();
// // //REPLACING PARTS OF A FUNCTION UPON EXECUTION
// // // function name(James){
// // //     console.log(`My name is ${James} and i am a strong guy!!!`);
// // // }
// // // name('Sam');
// // // name('John');
// // // name();
// // //RETURN
// // function two(success){
// //     return (success);
// // }
// // two('failed');
// // let ray= two('failed');
// // console.log(ray);

// // function log(words, isScream){
// //     if(isScream===true){
// //         return words.toUpperCase();}
// //     else if(isScream===false){
// //         return words.toLowerCase();
// //     }
// //     else{
// //          return words;
// //     }
// //     }
// // log('hello',false);
// // let val=log('hello',true);
// // console.log(val);

// // const people=function (){
// //     console.log('Manned Boats');
// // }
// // people();

//  function returnMe(){
//      return "!!!";
//  }
//  console.log(returnMe());
// ARRAY MAPS
// let  array = [1,2,3,4,5,6,];
//  let maya33 = [];
//  for(let i =0; i<array.length; i++){
//      maya33.push(array[i]*2.5);
//  }
//  console.log(maya33);
//  With Maps()
// let array = [1,2,3,4,5,6,];
// let maya33 = [];
// let anther = array.map(array=>{
// return maya33 * 3;
// })
// console.log(anther);
//JAVASCRIPT DESTRUCTURING
// let a,b,c;
// [a,b,c]=[123,453,987];
// console.log(a,c,b);

// const manners=['greet','bow','salute'];
// const [me, you, them] = manners;
// console.log([me, you, them]);

// const snake={
//     name:'rat snake',
//     age:'2',
//     state:'Ohio'
// };
// const {name, age, state} = snake;
// console.log(`This is a ${age}year old ${name} from ${state}!!!`);

// //FOR EACH
// let redBulls = ['man', 'woman', 'child'];
// redBulls.forEach(function(redBull){
//     console.log(redBull);
// })
// //Alternatively we can use for
// let humans= ['Asian', 'Caucasian', 'Indian', 'Eastern'];
// for(let i=0; i<humans.length; i++){
//     console.log(humans[i]);
// }

//REST AND SPREAD
//REST turns regular data into arrays
// const x=(...nums)=>{
//     console.log(nums);
// }
// const result = x(1,2,3,4,5,6,7,8,9);
// //SPREAD turns array into regular data
// const rats=['wolf', 'tiger', 'man'];
// const sow = ['man', 'claw', 'fang', ...rats];
// console.log(sow);
let a = prompt('What is your fav number?');
if(!isNaN(a)){
    alert(`So your favourite number is ${a}`);
}
else{
    prompt('Please input a number');
}
let mease= a*36;
alert(`Well, your fav no x36 is ${mease}`);

let p=prompt ('Did you like our brief time together?');

if(p==='Yes'){
    alert('Me too!!!');
}
if(p==='No'){
    alert('You are a sad sad guy');
}
else{
    alert('Make your own program then!!!')
};
