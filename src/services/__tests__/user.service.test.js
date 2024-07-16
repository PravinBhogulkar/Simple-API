import test from 'ava';
import userService from '../user.service';

let sampleUser;

test.beforeEach(() => {
    sampleUser =     {
        id: 1,
        name: 'John Doe',
        age: 20,
        email: 'john.doe@example.com',
        address: 'John Street',
        country: 'India',
        gender: 'male',
        phone: 1234567890
    };

});



test('must add a user',(t) => {
    const expectedID = 1;
    const user = userService.addUser(sampleUser);
    
    t.is(user.id,expectedID);
    t.deepEqual(user,{id:expectedID, ...sampleUser});
});

test('must get a user', (t) => {
    const expectedID = 1;
    const user = userService.getUser(expectedID);

    t.is(user.id,expectedID);
    t.deepEqual(user, sampleUser);
});

test('must get all users', (t) => {
    const user = userService.getAll();
    t.deepEqual(user[0], {...sampleUser});
});

test('must update a user', (t) => {
    const expectedID = 1;
    const updateUser = {
        name: 'Jane',
        age: 21,
        email: 'john@example.com',
        address: 'John Street',
        country: 'USA',
        gender: 'male',
        phone: 12456890
    }

    const user = userService.updateUser(1, updateUser);
    
    t.is(user.id,expectedID);
    t.deepEqual(user,{id:expectedID, ...updateUser});
});


test('must remove a user', (t) => {

    const expectedID = 1;
    const user = userService.removeUser(expectedID);
    t.is(user,undefined);

    const newUser = userService.getUser(expectedID);
    t.is(newUser, undefined);
});