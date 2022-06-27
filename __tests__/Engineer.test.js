const Engineer = require('../lib/Engineer'); 

test('test of constructor values from manager', () => {
    const engineer = new Engineer ('Jane', '123456', 'test@test.com', 'janeDoe'); 

    expect(engineer.name).toBe('Jane'); 
    expect(engineer.id).toBe('123456'); 
    expect(engineer.email).toBe('test@test.com'); 
    expect(engineer.githubUsername).toBe('janeDoe')
}); 
test('of getName method', () => {
    const engineer = new Engineer ('Jane', '123456', 'test@test.com', 'janeDoe'); 
   
    expect(engineer.getName()).toBe('Jane'); 
}); 

test('of getID method', () => {
    const engineer = new Engineer ('Jane', '123456', 'test@test.com', 'janeDoe'); 
   
    expect(engineer.getID()).toBe('123456');
});

test('of getEmail method', () => {
    const engineer = new Engineer ('Jane', '123456', 'test@test.com', 'janeDoe'); 
    
    expect(engineer.getEmail()).toBe('test@test.com'); 
}); 

test('of getGitHub() method', () => {
    const engineer = new Engineer ('Jane', '123456', 'test@test.com', 'janeDoe'); 
    
    expect(engineer.getGitHub()).toBe('https://github.com/janeDoe'); 
}); 

test('of getRole() method', () => {
    const engineer = new Engineer ('Jane', '123456', 'test@test.com', 'janeDoe'); 
    
    expect(engineer.getRole()).toBe('Engineer'); 
}); 