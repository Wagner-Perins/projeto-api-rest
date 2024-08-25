import { NextFunction, Request, Response } from "express";

export const validacaoLogin = (req:Request, res:Response, next:NextFunction) => {
    const {email, senha} = req.body;
    
    if(!email || !senha){
        return res.status(400).json({
            mensagem: "Todos os campos são obrigatórios"
        });
    };
    next();
};