const Manager = require('../lib/Manager');

test('creates new Manager', () => {
    const manager = new Manager('Bob');
});

test('sets office number', () => {
    const testNumber = 2134;
    const manager = new Manager('Bob', 1, 'bob@gmail.com', testNumber);
    expect(manager.officeNumber).toBe(testNumber);
});

test('gets office number', () => {
    const testNumber = 2134;
    const manager = new Manager('Bob', 1, 'bob@gmail.com', testNumber);
    expect(manager.getOfficeNumber()).toBe(testNumber);
});


test('gets role', () => {
    const testRole = 'Manager';
    const manager= new Manager('Bob', 1, 'bob@gmail.com');
    expect(manager.getRole()).toBe(testRole);
});