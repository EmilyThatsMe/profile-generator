const Intern = require('../lib/Intern');

test('creates new Intern', () => {
    const intern = new Intern('Bob');
});

test('sets school', () => {
    const school = 'UofM';
    const intern = new Intern('Bob', 1, 'bob@gmail.com', school);
    expect(intern.school).toBe(school);
});

test('gets school', () => {
    const school = 'UofM';
    const intern = new Intern('Bob', 1, 'bob@gmail.com', school);
    expect(intern.getSchool()).toBe(school);
});

test('gets role', () => {
    const testRole = 'Intern';
    const intern= new Intern('Bob', 1, 'bob@gmail.com');
    expect(intern.getRole()).toBe(testRole);
});