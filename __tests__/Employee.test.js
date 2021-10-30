const Employee = require('../lib/Employee.js');

test('creates new Employee', () => {
    const employee = new Employee('name');

    expect(employee.name).toBe('name');
});