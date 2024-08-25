import { Request, Response } from "express";
import TCompra from "../tipos/Compra";
import bancoDeDados from "../bancoDeDados";


export const controleCompraGet = (req:Request, res:Response): any => {
    const idUsuario = (req.query.comprovante as string).split("/")[1];
    const comprasUsuario = bancoDeDados.compras.filter((c) => c.id_usuario === idUsuario).map((c) => {
        const evento = bancoDeDados.eventos.find((e) => e.id === c.id_evento);
        

        if(!evento){
            return {
                idCompra: c.id,
                idEvento: c.id_evento,
                mensagem: "Evento não encontrado"
            };
            
        };
        const retornoCompra = {
            idCompra: c.id,
            idEvento: c.id_evento,
            nome: evento.nome,
            endereco: evento.endereco,
            data: evento.data,
            preco: evento.preco
        };
        return retornoCompra;
    });
    res.status(200).json(comprasUsuario);
};