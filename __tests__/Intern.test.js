const Intern = require('../lib/Intern'); 

test('test of constructor values from manager', () => { 
    const intern = new Intern ('Jane', '123456', 'test@test.com', 'Vandy'); 

    expect(intern.name).toBe('Jane'); 
    expect(intern.id).toBe('123456'); 
    expect(intern.email).toBe('test@test.com'); 
    expect(intern.school).toBe('Vandy')
}); 
test('of getName method', () => {
    const intern = new Intern ('Jane', '123456', 'test@test.com', 'Vandy'); 
    
    expect(intern.getName()).toBe('Jane'); 
}); 

test('of getID method', () => {
    const intern = new Intern ('Jane', '123456', 'test@test.com', 'Vandy'); 
   
    expect(intern.getID()).toBe('123456');
});

test('of getEmail method', () => {
    const intern = new Intern ('Jane', '123456', 'test@test.com', 'Vandy'); 
    
    expect(intern.getEmail()).toBe('test@test.com'); 
}); 

test('of getSchool() method', () => {
    const intern = new Intern ('Jane', '123456', 'test@test.com', 'Vandy'); 
    
    expect(intern.getSchool()).toBe('Vandy'); 
}); 

test('of getRole() method', () => {
    const intern = new Intern ('Jane', '123456', 'test@test.com', 'Vandy'); 
    
    expect(intern.getRole()).toBe('Intern'); 
}); 