
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
        required:false
    },
    tipo:{
        type:String,
        require:false
    }
  
})

const Persona = mongoose.model('Persona',personaShemas)


export default Persona