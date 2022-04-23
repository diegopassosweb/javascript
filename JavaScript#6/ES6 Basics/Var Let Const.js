// var -> function
// let -> block
// const -> block


function sayHello(){
    for(var i = 0; i < 5; i++){
        console.log(i); // conta de 0 a 4
    }
    console.log(i); // de 0 a 5
}
sayHello();