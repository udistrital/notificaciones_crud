import { config } from "dotenv";
config()

export const environment =  {
    USER: process.env.NOTIFICACIONES_CRUD_USER,
    PASS: process.env.NOTIFICACIONES_CRUD_PASS,
    HOST: process.env.NOTIFICACIONES_CRUD_HOST,
    PORT: process.env.NOTIFICACIONES_CRUD_PORT,
    DB: process.env.NOTIFICACIONES_CRUD_DB,
    HTTP_PORT: process.env.NOTIFICACIONES_CRUD_HTTP_PORT,
    AUTH_DB: process.env.NOTIFICACIONES_CRUD_AUTH_DB 
};