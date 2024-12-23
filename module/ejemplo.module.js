
import mongoose from "mongoose";

const personaShemas= mongoose.Schema({
    correo:{
        type:String,
        required:true
    },

    clave:{
        type:String,
        required:true
    },
    usuario:{
        type:String,
        required:true
    },
  
})

const Persona = mongoose.model('Persona',personaShemas)


export default Persona