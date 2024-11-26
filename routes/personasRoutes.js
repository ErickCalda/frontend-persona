import { Router } from "express";
import {Controller} from "../controller/persona.js";
const perosna = Router();

const controller = new Controller();

// GET en la raíz
perosna.get('/',controller.getpersona )

// GET con parámetro de ID
perosna.get('/:id',controller.getpersonaID);

// PUT
perosna.put('/:id',controller.updatepersona);

// POST
perosna.post('/',controller.postpersona);

// DELETE con parámetro de ID
perosna.delete('/:id',controller.deletePersona);

export default perosna;
