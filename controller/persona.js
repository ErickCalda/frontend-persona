import Persona from "../module/ejemplo.module.js";
import mongoose from "mongoose";
import express from "express"

export class Controller{



getpersona = async (req,res)=>{
    console.log('obtine todos los personas')

    try {
     const personas =   await Persona.find({},{__v:0});

        if(personas.length===0){

            return res.status(400).json({
                    msg:'No se encontraron personas'
                })
        }
        res.status(200).json(personas);

        
     
    } catch (error) {
       return res.status(500).json({
            msg:'error al octener personas'
        })

        }
        
    
}


 getpersonaID = async (req, res) =>{

    console.log('busqueda por id')
    const id = req.params.id;
    try {
       if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            msg:'id no valido'
        })

       }

       const persona = await Persona.findById(id)
       if(!persona){
        return res.status(404).json({
            msg:'persona no encontrado'

        })

       }
      return res.status(200).json({
        persona
       })
       

        
    } catch (error) {
       return res.status(500).json({
            error: 'error al buscar el id'
        })

        
        
    }
}



postpersona = async(req, res)=>{
    const body = req.body;
    const persona = new Persona(body)
    try {

        const validaError = persona.validateSync();

        if(validaError){
            const errorMensaje = Object.values(validaError.errors).map(errors => errors.message);
            
            return res.status(400).json({
                error: errorMensaje

            })
        }
        
        await persona.save();
       return res.status(200).json({
            persona
        })

        
    } catch (error) {
        console.log(error)

       return res.status(500).json({
            error: 'error al guardar persona'
        })
        
    }
}



updatepersona = async (req, res) => {
    console.log('actualizar persona');
    const id = req.params.id;

    try {
        // Verifica si el ID es válido
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }

        // Actualiza el documento con los datos enviados en el cuerpo de la solicitud
        const personaActualizado = await Persona.findByIdAndUpdate(id, req.body, {
            new: true, // Retorna el documento actualizado
            runValidators: true // Ejecuta las validaciones definidas en el schema
        });

        if (!personaActualizado) {
            return res.status(404).json({
                msg: 'persona no encontrado'
            });
        }

        // Devuelve el documento actualizado
        return res.status(200).json({
            msg: 'persona actualizado',
            persona: personaActualizado
        });

    } catch (error) {
        // Manejo de errores
        return res.status(500).json({
            error: 'Error al actualizar el persona'
        });
    }
};






deletePersona = async (req, res) => {
    console.log('eliminar ejemplo');
    const id = req.params.id;

    try {
        // Verifica si el ID es válido
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }

        // Elimina el documento por ID
        const ejemploEliminado = await Persona.findByIdAndDelete(id);

        if (!ejemploEliminado) {
            return res.status(404).json({
                msg: 'Ejemplo no encontrado'
            });
        }

        // Devuelve una respuesta de éxito
        return res.status(200).json({
            msg: 'Ejemplo eliminado'
        });

    } catch (error) {
        // Manejo de errores
        return res.status(500).json({
            error: 'Error al eliminar el ejemplo'
        });
    }
};





deleteAllPersonas = async (req, res) => {
    try {
        // Eliminar todos los documentos de la colección
        const resultado = await Persona.deleteMany({});

        // Verificar si había documentos para eliminar
        if (resultado.deletedCount === 0) {
            return res.status(404).json({
                msg: 'No hay elementos para eliminar'
            });
        }

        // Respuesta de éxito
        return res.status(200).json({
            msg: 'Todos los elementos han sido eliminados',
            cantidadEliminada: resultado.deletedCount
        });
    } catch (error) {
        // Manejo de errores
        return res.status(500).json({
            error: 'Error al eliminar los elementos',
            detalle: error.message
        });
    }
};




} //fin classs
