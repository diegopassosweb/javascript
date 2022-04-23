const person = {
    name: 'Morsh',
    walk() {
        console.log(this);
    }
};
person.walk();

const walk = person.walk;
walk();