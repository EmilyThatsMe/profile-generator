
const Engineer = require('../lib/Engineer');

test('creates new Engineer', () => {
    const engineer = new Engineer('Bob');
});

test('sets github', () => {
    const github = 'Bobsgithub';
    const engineer = new Engineer('Bob', 1, 'bob@gmail.com', github);
    expect(engineer.github).toBe(github);
});

test('gets github', () => {
    const github = 'Bobsgithub';
    const engineer = new Engineer('Bob', 1, 'bob@gmail.com', github);
    expect(engineer.getGithub()).toBe(github);
});

test('gets role', () => {
    const testRole = 'Engineer';
    const engineer = new Engineer('Bob', 1, 'bob@gmail.com');
    expect(engineer.getRole()).toBe(testRole);
});