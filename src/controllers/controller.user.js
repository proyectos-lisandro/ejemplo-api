import pool from "../database/db"
import mensajes from "../res/mensa"

const listarusuarios= async(req, res)=>{
try {
    const respuesta =  await pool.query(`CALL sp_listar_usuarios()`)
    mensajes.success(req, res, 200, respuesta[0]);
} catch (error) {
    mensajes.error(req, res,500, error);
}
}
const mostrarusuarios=()=>{

};
const agregarusuarios= async(req, res)=>{
    const {nombre} =req.body;

    try {
        const respuesta = await pool.query(`CALL sp_agregar_usuario(?);`,[nombre]);
        if(respuesta[0].affectedRows==1){
            mensajes.success(req, res, 200, "usuario agregado");
        }else{
            mensajes.error(req, res, 400, "usuario no agregado");
        }
    } catch (error) {
        mensajes.error(req, res, 500, error);
    }
};
const modificarusuarios=()=>{

};
const eliminarusuarios=()=>{

};

export const metodos= {
    listarusuarios,
    mostrarusuarios,
    agregarusuarios,
    modificarusuarios,
    eliminarusuarios,
}

