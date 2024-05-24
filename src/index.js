// aca vamos a importar app
import app from "./app";


// aca llamamos el puerto con listen

app.listen(app.get("port"), ()=>{
    console.log(`http://localhost:${app.get("port")}`);
});

// aca finalizamos con el puerto