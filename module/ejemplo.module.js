
import mongoose, { Types } from "mongoose";

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
    saldo:{
        type:Types.Decimal128,
        require:false
    }
  
})

const Persona = mongoose.model('Persona',personaShemas)


export default Persona