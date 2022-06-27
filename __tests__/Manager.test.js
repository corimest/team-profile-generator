const Manager = require('../lib/Manager'); 

test('test of constructor values from manager', () => {
    const manager = new Manager ('dave', '123456', 'test@test.com', '2211'); 

    expect(manager.name).toBe('dave'); 
    expect(manager.id).toBe('123456'); 
    expect(manager.email).toBe('test@test.com'); 
    expect(manager.officeNumber).toBe('2211'); 
}); 
test('of getName method', () => {
    const manager = new Manager ('dave', '123456', 'test@test.com', '2211'); 

    expect(manager.getName()).toBe('dave'); 
}); 

test('of getID method', () => {
    const manager = new Manager ('dave', '123456', 'test@test.com', '2211'); 
    
    expect(manager.getID()).toBe('123456');
});

test('of getEmail method', () => {
    const manager = new Manager ('dave', '123456', 'test@test.com', '2211'); 
    
    expect(manager.getEmail()).toBe('test@test.com'); 
}); 

test('of getofficeNumber method', () => {
    const manager = new Manager ('dave', '123456', 'test@test.com', '2211'); 
    
    expect(manager.getofficeNumber()).toBe('2211'); 
}); 

test('of getRole method', () => {
    const manager = new Manager ('dave', '123456', 'test@test.com', '2211'); 
    
    expect(manager.getRole()).toBe('Manager'); 
}); 