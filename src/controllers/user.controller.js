import userService from '../services/user.service';
import { StatusCodes } from 'http-status-codes';
import pino from 'pino';

const logger = pino();
const STATUS =  {
    success: 'OK',
    failure: 'NO',
};

/**
 * Add a User
 * @param req 
 * @param res 
 * @returns 
 */

const addUser =  (req,res) => {
    const { body: user } = req;
    const addNewUser = userService.addUser(user);
    logger.info("Creating a user");
    
    return res.status(StatusCodes.CREATED).send({
        status: STATUS.success, 
        data:addNewUser,
    });
}

/**
 * Update a User
 * @param req 
 * @param res 
 * @returns 
 */

const updateUser = (req,res) => {
    const { body: user } = req;
    
    const id = parseInt(req.params.id,10);
    const updatedUser = userService.updateUser(id, user);
    
    if (updatedUser){
        logger.info(`Updating "${id}" user`);
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            data: updatedUser,
        });
    } else {
        logger.info(`Updating "${id}" failed.`);
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User "${id}" not found`,
        });
    }
}

/**
 * Remove a User
 * @param req 
 * @param res 
 * @returns 
 */

const removeUser = (req,res) => {
    const id = parseInt(req.params.id,10);
    const user = userService.getUser(id);
    if (user){
        logger.info(`Removing "${id}" user`);
        userService.removeUser(id);
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            message: `User "${id}" has been deleted`,
        });
    } else {
        logger.info(`Removing "${id}" failed.`);
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User "${id}" hasn't been found`,
        });
    }
}


/**
 * Retrive All Users
 * @param req 
 * @param res 
 * @returns 
 */

const getAllUsers =  (req,res) => {
    
    const users = userService.getAll();
    if (users.length){
        return res.status(StatusCodes.OK).send(users);
    } else {
        logger.info("Users are not found");
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `Users are not found`,
        });
    }
}

/**
 * Retrive a User
 * @param  req 
 * @param  res 
 * @returns 
 */

const getUser = (req,res) => {

    const id = parseInt(req.params.id,10);
    const user = userService.getUser(id);

    
    if (user){
        logger.info(`Retrive "${id}" user.`);
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            data: user,
        });
    } else {
        logger.info(`User "${id}" not found`);
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User "${id}" not found`,
        });
    }
}

export default {
    addUser,
    updateUser,
    removeUser,
    getAllUsers,
    getUser
}