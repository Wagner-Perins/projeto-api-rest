import { Request, Response } from "express";

export function apresentacao(req:Request, res:Response) {
    return res.json ({ mensagem: "API de vendas de ingressos"});
};