import { users } from '../../db'
import { Request, Response } from "express";

export const getUser = (req: Request, res: Response) => {
    try {
        const user = users.find((item) => item.id === parseInt(req.params.id))
        res.status(200).send(user)
    } catch (e: any) {
        res.status(500).send(e.message)
    }
}