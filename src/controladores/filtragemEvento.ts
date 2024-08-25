import { Request, Response } from "express";
import TEvento from "../tipos/Evento";
import bancoDeDados from "../bancoDeDados";

export const precoMaximo = (req:Request, res:Response) => {

        const {maxPreco} = req.query;
        const filtroEvento: TEvento[] = bancoDeDados.eventos;
        
        if(!maxPreco){
        return res.status(200).json(bancoDeDados.eventos);
        };

    const maxPrecoNumerico = Number(maxPreco);

    
        if(maxPrecoNumerico <= 0 || isNaN(maxPrecoNumerico)){
            return res.status(400).json({
                mensagem: "O preço máximo do evento deve conter apenas números e deve ser positivo"
            });
        };
        const eventos = filtroEvento.filter((e) => e.preco <= Number(maxPreco));
        return res.status(200).json(eventos);
    };