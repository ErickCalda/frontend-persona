
import mongoose from "mongoose";

const personaShemas= mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },

    apellido:{
        type:String,
        required:true
    },
    edad:{
        type:String,
        required:true
    },
    contacto:{
        type:[String],
        required:false
    }
})

const Persona = mongoose.model('Persona',personaShemas)


export default Persona