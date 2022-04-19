import { Router } from 'express';
import {createUser} from '../controllers/users/createUser';
import {deleteUser} from '../controllers/users/deleteUser';
import {updateUser} from '../controllers/users/updateUser'
import {getUser} from "../controllers/users/getUser";
import {getAllUsers} from "../controllers/users/getAllUsers";

const router = Router();

router.get('/', getAllUsers)
router.get('/:id', getUser)
router.post('/', createUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)

export = router;