import { NextFunction, Request, Response } from "express";
import bancoDeDados from "../bancoDeDados";
import TUsuario from "../tipos/Usuario";

export const emailExistente = (req:Request, res:Response, next:NextFunction) => {
    const {email} = req.body;
    const usuarios: TUsuario[] = bancoDeDados.usuarios;
    const emailJaExiste = usuarios.find((u) => u.email === email);
    
    if(emailJaExiste){
        return res.status(404).json({
            mensagem: "E-mail já cadastrado"
        });
    };
    next();

    return;
};