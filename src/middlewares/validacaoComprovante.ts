import { NextFunction, Request, Response } from "express";
import bancoDeDados from "../bancoDeDados";

export const validacaoComprovante = (req:Request, res: Response, next: NextFunction) => {
    const comprovante = req.query.comprovante as string | undefined;

    if (!comprovante){
        return res.status(401).json({
            mensagem: "Falha na autenticação"
        });
    };
    const usuarioId = comprovante.split("/")[1];

    if (!bancoDeDados.usuarios.find((u) => u.id === usuarioId)){
        return res.status(401).json({
            mensagem: "Falha na autenticação"
        });
    };
    next();
};