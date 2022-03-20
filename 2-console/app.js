//what about console
console.log("develpoment");
console.info("information")
console.warn("warnning")
console.error("error")

//assert
console.assert(2 === 3, 'not same');
console.assert(2 === 2, 'same');

//print object
const student = {name:'sean', age:20, company: {name:'park'}};
console.table(student)
console.dir(student, {showHidden:true, colors: false, depth: 0})

//measuring time (plz using same consolevalue)
console.time('for loop')
for(let i = 0; i<10; i++){
    i++;
}
console.timeEnd('for loop')

//counting
function a(){
    console.count('a function')
}
a();
a();

//trace
function f1(){
f2();
};
function f2(){
f3();
};
function f3(){
    console.log('f3');
    console.trace();
};
f1();