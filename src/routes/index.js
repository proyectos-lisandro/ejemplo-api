import { Router } from "express";
import rutausuario from "./ruta.user";

const rutas = Router();


rutas.use("/api",rutausuario);

export default rutas;
