import mongoose from "mongoose";
import config from './config.js'


mongoose
    .connect(config.MONGODB_URL)
    .then(() => console.log('Conectado a MongoDB'))
    .catch((err) => console.log(err))