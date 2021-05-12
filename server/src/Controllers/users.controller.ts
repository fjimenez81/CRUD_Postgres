import { Request, Response } from 'express'
import { QueryResult } from 'pg'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { pool } from '../database'

export const getUsers = async (req: Request, res: Response): Promise<Response> => {

    try {

        const response: QueryResult = await pool.query('SELECT * FROM users')
        return res.status(200).json(response.rows)
        
    } catch (error) {
        
        console.log(error)
        return res.status(500).json('Internal server error')
    }
}

export const getUserById = async (req: Request, res: Response): Promise<Response> => {

    try {

        const id: Number = parseInt(req.params.id)
        const response: QueryResult = await pool.query('SELECT * FROM users WHERE id=$1', [id])
        return res.status(200).json(response.rows)
        
    } catch (error) {

        return res.status(500).json('Internal server error')
        
    }

}

export const createUser = async (req: Request, res: Response): Promise<Response> => {

    try {
        const { name, email, password, id } = req.body
        console.log(name)
        const salt: string = await bcrypt.genSalt(10)
        const hash: string = await bcrypt.hash(password, salt)
        await pool.query('INSERT INTO users(name, email, password) VALUES($1, $2, $3)', [name, email, hash])
        const token: string = jwt.sign({_id: id}, process.env.TOKEN_SECRET)
        return res.header('auth-token', token).json({
            message: 'User crated successfully',
            body: { user: { name, email, password: hash }}
        })
    } catch (error) {

        return res.status(500).json('Internal server error')
        
    }

}

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {

    try {

        const id: Number = parseInt(req.params.id)
        const response: QueryResult = await pool.query('DELETE FROM users WHERE id=$1', [id])
        return res.json(`User ${id} deleted Successfully`)
        
    } catch (error) {

        return res.status(500).json('Internal server error')
        
    }

}

export const updateUser = async (req: Request, res: Response): Promise<Response> => {

    try {

        const id: Number = parseInt(req.params.id)
        const { name, email } = req.body
        const response: QueryResult = await pool.query('UPDATE users SET name=$1, email=$2 WHERE id=$3', [name, email, id])
        return res.json(`User ${id} update Successfully`)
        
    } catch (error) {

        return res.status(500).json('Internal server error')
        
    }

}