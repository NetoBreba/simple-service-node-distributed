import express from 'express'
import bodyParser from 'body-parser'
import userRoute from './routes/user'
import homeRoute from './routes/home'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", homeRoute)
app.use("/users", userRoute)

app.listen(9000, () => {
    console.log('Servidor rodando na porta 9000')
})