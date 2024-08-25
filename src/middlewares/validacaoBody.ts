import { NextFunction, Request, Response } from "express";

export const campoObrigatorio = (req:Request, res:Response, next:NextFunction) => {
    const {nome, email, senha} = req.body;

    if(!nome || !email || !senha){
        return res.status(400).json({
            mensagem: "Todos os campos são obrigatórios"
        });
    };
    next();

    return;
};