//true
function hello() {
    console.log(this);
    console.log(this === global);
}
hello()

//class this is not global
class A {
    constructer(num) {
        this.num = num;
    };
memberFunction() {
        console.log('-----class----')
        console.log(this);
        console.log(this === global);
    };
};
const a = new A(1);
a.memberFunction();

//what is this
console.log('----global scope ----');
console.log(this);
console.log(this === module.exports)