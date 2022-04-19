import {Request, Response } from 'express'
import { users } from '../../db'
import { User } from '../../models/User'

export const createUser = (req: Request, res: Response) => {
    const { id, name } = req.body;
    const obj = new User(id, name);
    users.push(obj);
    res.status(201).send('Item is created');
};
