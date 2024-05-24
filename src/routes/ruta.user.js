import { Router } from "express";
import { metodos } from "../controllers/controller.user";

const rutausuario = Router();

rutausuario.get("/usuario", metodos.listarusuarios);
rutausuario.get("/usuario/:id", metodos.mostrarusuarios);
rutausuario.post("/usuario", metodos.agregarusuarios);
rutausuario.put("/usuario", metodos.modificarusuarios);
rutausuario.delete("/usuario", metodos.eliminarusuarios);


export default rutausuario;