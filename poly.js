console.log('This is polymorphism basics');

/*What is polymorphism?

 POLY-----> MANY
 MORPH----> FORMS
 POLYMORPHISM ----> MANY FORMS

 So, Polymorphism is the ability to take on multiple forms. 
 
 Same set of functions but different classes and implementation.
 */

//  Example:-


// parent class

class Animal {
    
    constructor(name){
        this.name = name;
    }
    eats(){
        console.log(this.name + ' '+ 'eats food');
    }
}

// const animal = new Animal('Dog');
// animal.eats();


// child class :- 

class Alligator extends Animal{
// Constructor is alo being used from the parent class.
    eats(){ 
        // super.eats();   //super-->calling parent class method. 
        console.log(this.name + ' eats meat');
   }
     // If we don't have this function in child class then it takes from the parent class. 
     // Else child class function overrides parent class function. 
     // This is called method overriding.
}

const crocodile = new Alligator('crocodile');
crocodile.eats();

// In this example, eats() function is present in multiple forms and we 
// decide which form will get executed based on the object we create.



//Example 2:-

// class Bird {
//     constructor(name){
//         this.name = name;
//     }
//     flies(){
//         console.log(this.name + ' flies high');
//     }
// }

// const bird = new Bird('Eagle');
// bird.flies();

// class Nextbird extends Bird{
//     flies(){
//         console.log(this.name + ' does not fly high');
//     }
// }
// const duck = new Nextbird('Duck');
// duck.flies();




//Exaple 3;-

// class Bp {
//     constructor(name){
//         this.name = name;
//     }
//     works(){
//         console.log(this.name + ' helps us to see around');
//     }
// }

// const bp = new Bp('Eye');
// bp.works();

// class Bp2 extends Bp{
//     works(){
//         console.log(this.name + ' helps us to hear');
//     }
// }

// const bp2 = new Bp2('Ear');
// bp2.works();

// class Bp3 extends Bp{
//     works(){
//         console.log(this.name + ' helps us to smell');
//     }
// }
// const bp3 = new Bp3('Nose');
// bp3.works();

// class Bp4 extends Bp{
//     works(){
//     console.log(this.name + ' helps us to taste');
//     }
// }

// const bp4 = new Bp4('Tounge');
// bp4.works();

// class Bp5 extends Bp{
//     works(){
//         console.log(this.name + ' helps us to speak');
//     }
// }
// const bp5 = new Bp5('Mouth');
// bp5.works();





//EXAMPLE 4.:-

/*class Bikes {
    constructor(name){
        this.name = name;
    }
    mileage(){
        console.log(this.name + ' has the mileage of 150');
    }
}

const bajaj = new Bikes('Bajaj pulsar');
bajaj.mileage();



class Bikes2 extends Bikes{
    mileage(){
        // super.mileage();
        console.log(this.name + ' has the mileage of 64');
    }
}

const hero = new Bikes2('Hero glamour');
hero.mileage();



class Bikes3 extends Bikes{
    mileage(){
        console.log(this.name + ' has the mieage of 67');
    }
}

const tvs = new Bikes3('TVS Raider');
tvs.mileage();

//In this example, we have the same function:- mileage() for different classes with different implementation. 
//This is called polymorphism.

*/


// class Animal{
    
//     constructor(name){
//         this.name = name;
//     }

    // eats(){
    //     console.log(this.name + ' eats food');

//     }
// }
// const dog = new Animal('Dog');
// dog.eats();

// class Alligator extends Animal{
//     eats(){
//         console.log(this.name + ' eats fishes');
//     }
// }

// const crocodile = new Alligator('Crocodile');
// crocodile.eats();


// class Bodypart{
     
//     constructor(name, work){
//          this.name = name;
//     }

//     work(){
//         console.log(this.name + ' helps me to hear');
//     }
// }

// const ear = new Bodypart('Ear');
// ear.work();

// class Bp1 extends Bodypart{

//     work(){
//         console.log(this.name + ' helps me to see');
//     }
// }

// const eye = new Bp1('Eye');
// eye.work();



// class Bp2 extends Bodypart{
//     work(){
//         console.log(this.name + ' helps me to smell');
//     }
// }

// const nose = new Bp2('Nose');
// nose.work();
