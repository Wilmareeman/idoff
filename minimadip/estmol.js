let config = {
    name: 'John',
    age: 30,
    city: 'New York'
};

let prop = 'age';

console.log('Before deletion:', config); // Before deletion

delete config[prop];

console.log('After deletion:', config); // After deletion
