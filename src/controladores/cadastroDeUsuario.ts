import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import TUsuario, { TUsuarioIdOmitido } from "../tipos/Usuario";
import bancoDeDados from "../bancoDeDados";
import criptografarSenha from "../auxiliares/criptografia";

export const cadastroUsuario = (req:Request, res:Response) => {
    const usuarios: TUsuario[] = bancoDeDados.usuarios;
    const {nome, email, senha} = req.body;
    const id = uuidv4();
    const novoCadastro: TUsuario = {
        id,
        nome,
        email,
        senha: criptografarSenha(senha)
    };
    const idOmitido: TUsuarioIdOmitido = {
        id: novoCadastro.id,
        nome: novoCadastro.nome,
        email: novoCadastro.email
    };
    usuarios.push(novoCadastro);
    return res.status(201).json(idOmitido)
};