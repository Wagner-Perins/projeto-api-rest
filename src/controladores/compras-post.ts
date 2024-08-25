import { Request, Response } from "express";
import TCompra from "../tipos/Compra";
import bancoDeDados from "../bancoDeDados";
import { v4 as uuidv4 } from "uuid";

export const controleCompraPost = (req:Request, res:Response): any => {
        const {idEvento} = req.body;

        if(!idEvento){
            return res.status(400).json({
                mensagem: "O identificador do evento é obrigatório"
            });
        };
        const evento = bancoDeDados.eventos.find((e) => e.id === idEvento);

        if(!evento){
            return res.status(404).json({
                mensagem: "Evento não encontrado"
            });
        };
        const idUsuario = (req.query.comprovante as string).split("/")[1];
        const id = uuidv4();
        const novaCompra: TCompra = {
            id: id,
            id_usuario: idUsuario,
            id_evento: evento.id
        };
        bancoDeDados.compras.push(novaCompra);
        res.status(201).json(novaCompra);
    };
