// importaciones
import express from 'express';
import { config } from 'dotenv';
import rutas from './routes';
import morgan from 'morgan';
config();
// esta constante es para la aplicación
const app = express();


// esta de aca donde vamos a definir el puerto del servidor
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(morgan("dev"));
app.use(express.json());
// rutas
app.use("/", rutas);

// en esta exportamos app para index.js

export default app;