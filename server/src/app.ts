import express, { Application, Request, Response } from "express";
import dotenv from 'dotenv'
import path from 'path'
import morgan from 'morgan'
import cors from 'cors'
import routeAdmin from './routes/admin.route'

dotenv.config()

const app: Application = express()
export const port =  process.env.PORT || 5200

app.set('port', port)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/users", routeAdmin)


app.get('/', (req: Request, res: Response) => {
   res.render('index')
})

export default app