import userDao from '../models/persistence/user.dao';


/**
 * Retrive the users 
 * @returns { Objects[] } users 
 */

const getAll = () => userDao.getAll();

/**
 * Retrive the user
 * @param  { number } userID
 * @returns { Object } user 
 */

const getUser = (userID) => userDao.get(userID);

   /**
     * Update a User from its ID
     * @param { number } userId 
     * @returns { Object } user
     */

const updateUser = (userID, details) => userDao.update(userID, details);

/**
 * Insert a User
 * @param { Object[] } details 
 * @returns { Object } user
 */

const addUser = (details) => userDao.insert(details);

   /**
     * Remove a User from its ID
     * @param { number } userId 
     * @returns { Object } user
     */

const removeUser = (userID) => userDao.remove(userID);

export default {
    getUser,
    updateUser,
    addUser,
    removeUser,
    getAll
}