
import { findById } from '../functions/utils.js';
import { getUser, setUser } from '../functions/local-storage-utils.js';

const test = QUnit.test;


//findById tests ////////////////////////////////////////////////////////////////////////////////////
const someArr = [
    {
        id: 1
    },
    {
        id:2
    }
];
test('test findById', (expect) => {
    
    const expected = 1;
    
    const findPet = findById(someArr, 1);
    const actual = findPet.id;

    expect.equal(actual, expected);
});

//setUser ////////////////////////////////////////////////////////////////////////////////////////////
test('setUser should take a user object and put the strigified version of the object into local storage ', (expect) => {
  
    const user = {
        username: 'ben',
        petname: 'spot'
    };
    
    setUser(user);
    const actual = {
        username: 'ben',
        petname: 'spot'
    };

    const expected = getUser('ben');

    expect.deepEqual(actual, expected);
});

//getUser///////////////////////////////////////////////////////////////////////////////////////
test('getUser should get a stringified user object from local storage and parse it,  return parsed object', (expect) => {
   
    const user = {
        username: 'charles',
        petname: 'jeep',
        water: 2
    };
    setUser(user);
    const expected = getUser('charles');
    
    expect.deepEqual(user, expected);
});



