import  users from '../data/users.data';

/**
 * Retrive the user
 * @param  { number } userID
 * @returns { Object } user 
 */
const get = (userID) => users.find((user) => (user.id === userID));

/**
 * Retrive the users 
 * @returns { Objects[] } users 
 */
const getAll = () => users;

/**
 * Insert a User
 * @param { Object[] } details 
 * @returns { Object } user
 */
const insert = (details) => {
        const newUser = {
            id:users.length + 1,
            ...details 
        };
        users.push(newUser);
        return newUser;
    }

    /**
     * Update a User from its ID
     * @param { number } userId 
     * @returns { Object } user
     */

    const update = (userId, newDetails) => {
        let existingUser = null;
        let userIndex;
    
        users.map((user, index) => {
            if (user.id === userId) {
                existingUser = user;
                userIndex = index;
            }
        });
    
        if (!existingUser) {
            return false;
        }
    
        const updatedUser = {
            ...existingUser,
            ...newDetails
        };
    
        users.splice(userIndex, 1, updatedUser);
    
        return updatedUser;
    }

    /**
     * Remove a User from its ID
     * @param { number } userId 
     * @returns { Object } user
     */
    const remove = (userId) => {
        const deleteUser = (user, index) => {
            if (user?.id === userId) {
                // Remove the array element of the found user
                users.splice(index, 1);
            }
        };
        return users.find(deleteUser)
    }

export default {
    get,
    insert,
    update,
    remove,
    getAll
}
