import mongoose from 'mongoose'

let conexion= false;



const conexionMongodb =async()=>{
    if(conexion){
        console.log('ya esta conectado'.green);
        return
    }
    try {
        await mongoose.connect(process.env.MONGO_URL)
        conexion= true
        console.log('conectado a mongo'.green);
        
    } catch (error) {
        console.log('error al conectar en mongo'.red)
        
    }

}


const db = mongoose.connection;
db.on['error',(error)=>{
    console.log(error.red)
        

}]

db.once['open',()=>{
    conexion= true;

}]

db.on['disconnected',()=>{
    conexion= false;
    console.log('desconectado de   mongo'.yellow)
        
}]
process.on['SIGINT',async()=>{
    await mongoose.connection.close()
    console.log(' mongo desconectado'.yellow)
    process.exit(0)
}]

export {conexion,conexionMongodb};