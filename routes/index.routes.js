import persona from "./personasRoutes.js";

import { Router } from "express";


const indexRoutes = Router();

indexRoutes.use('/personas',persona)

export default indexRoutes