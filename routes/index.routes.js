import persona from "./personasRoutes.js";

import { Router } from "express";


const indexRoutes = Router();

indexRoutes.use('/trabaja-con-nosotros',persona)

export default indexRoutes