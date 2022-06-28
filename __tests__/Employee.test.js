const Employee = require('../lib/Employee'); 

test('test of constructor values from employee', () => {
    const employee = new Employee ('dave', '123456', 'test@test.com'); 

    expect(employee.name).toBe('dave'); 
    expect(employee.id).toBe('123456'); 
    expect(employee.email).toBe('test@test.com'); 
}); 

test('of getName method', () => {
    const employee = new Employee ('dave', '123456', 'test@test.com'); 

    expect(employee.getName()).toBe('dave'); 
}); 

test('of getID method', () => {
    const employee = new Employee ('dave', '123456', 'test@test.com'); 

    expect(employee.getID()).toBe('123456');
});

test('of getEmail method', () => {
    const employee = new Employee ('dave', '123456', 'test@test.com'); 

    expect(employee.getEmail()).toBe('test@test.com'); 
}); 

test('of getRole method', () => {
    const employee = new Employee ('dave', '123456', 'test@test.com'); 

    expect(employee.getRole()).toBe('Employee'); 
}); 
