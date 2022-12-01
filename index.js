import express from 'express'
const app = express()
import morgan from 'morgan'
import config from './config.js'
import './mongoConnect.js'

import artistasRoutes from './routes/artistas.routes.js'

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

//Routes
app.use('/api/artistas', artistasRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(config.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${config.PORT}`)
})