const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates new Employee', () => {
    const employee = new Employee('Bob');
});

test('gets id', () => {
    const idNumber = 1234;
    const employee = new Employee('Bob', idNumber);
    expect(employee.id).toBe(idNumber);
});

test('gets email', () => {
    const testEmail = 'bob@gmail.com';
    const employee = new Employee('Bob', 1, testEmail);
    expect(employee.email).toBe(testEmail);
});

test('gets role', () => {
    const testRole = 'Employee';
    const employee = new Employee('Bob', 1, 'bob@gmail.com');
    expect(employee.getRole()).toBe(testRole);
});