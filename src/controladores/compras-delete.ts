import { Request, Response } from "express";
import TCompra from "../tipos/Compra";
import bancoDeDados from "../bancoDeDados";

export const controleCompraDelete = (req:Request, res:Response): any => {
    const idCompra = req.params.id;
    const idUsuario = (req.query.comprovante as string).split("/")[1];
    const indiceCompra = bancoDeDados.compras.findIndex((c) => c.id === idCompra && c.id_usuario === idUsuario);

    if(indiceCompra === -1){
        return res.status(404).json({
            mensagem: "Compra não encontrada"
        });
    };
    bancoDeDados.compras.splice(indiceCompra, 1);
    res.status(204).json();
};