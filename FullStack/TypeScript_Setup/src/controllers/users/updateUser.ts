import { users } from '../../db'
import {Request, Response } from "express"

export const updateUser = (req: Request, res: Response) => {
    const id = req.params.id
    const index = users.findIndex((item) => item.id === +id)
    if (index !== -1) {
        users[index] ={
            id: users[index].id,
            name: req.body.name || users[index].name
        }
    }
    res.send('Item is updated')
}