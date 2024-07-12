import express from "express";
import { expressYupMiddleware } from "express-yup-middleware";

import userController from "./controllers/user.controller";
import userSchemas from "./user.schemas";


const router = express.Router();

router.use(express.json());

router.post('/', 
    expressYupMiddleware({ schemaValidator:  userSchemas.addUser }),
    userController.addUser);


router.put('/:id', 
    expressYupMiddleware({ schemaValidator:  userSchemas.updateUser }), 
    userController.updateUser);

router.get('/all', 
    userController.getAllUsers);

router.get('/:id', 
    expressYupMiddleware({ schemaValidator:  userSchemas.getUser }), 
    userController.getUser);


router.delete('/:id', 
    expressYupMiddleware({ schemaValidator:  userSchemas.removeUser }),
    userController.removeUser);

export default router;
