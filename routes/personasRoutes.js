import { Router } from "express";
import {Controller} from "../controller/persona.js";
const persona = Router();

const controller = new Controller();

// GET en la raíz
persona.get('/',controller.getpersona )

// GET con parámetro de ID
persona.get('/:id',controller.getpersonaID);

// PUT
persona.put('/:id',controller.updatepersona);

// POST
persona.post('/',controller.postpersona);

persona.delete('/eliminar',controller.deleteAllPersonas)
persona.delete('/:id',controller.deletePersona);


export default persona;
