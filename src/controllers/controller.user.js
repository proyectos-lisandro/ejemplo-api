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
const mostrarusuarios=async(req, res)=>{
    const {id}= req.params;
    try {
        const respuesta = await pool.query(`CALL sp_mostrar_usuario(?);`,[id]);
        mensajes.success(req, res, 200, respuesta[0]);
    } catch (error) {
        mensajes.error(req, res, 500, error);
    }
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
const modificarusuarios=async(req, res)=>{
    const {id,nombre}= req.body;
    try {
        const respuesta = await pool.query(`CALL sp_modificar_usuario(?,?);`,[id,nombre]);
        if (respuesta[0].affectedRows==1) {
            mensajes.success(req, res, 200, "usuario modificad0");
        }else{
            mensajes.error(req, res,400, "usuarios no modificado");
        }
    } catch (error) {
        mensajes.error(req, res,500, error);
    }
};
const eliminarusuarios=async(req, res)=>{
    const {id}= req.body;
    try {
        const respuesta = await pool.query(`CALL sp_eliminar_usuario(?);`,[id]);
    if(respuesta[0].affectedRows==1){
        mensajes.success(req, res, 200, "usuario eliminado");
    }else{
        mensajes.error(req, res, 400, "usuario no eliminado");
    }
    } catch (error) {
     mensajes.error(req, res,500, error);
    }
};

export const metodos= {
    listarusuarios,
    mostrarusuarios,
    agregarusuarios,
    modificarusuarios,
    eliminarusuarios,
}

