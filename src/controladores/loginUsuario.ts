import { Request, Response } from "express";
import bancoDeDados from "../bancoDeDados";
import TUsuario from "../tipos/Usuario";
import fraseSecreta from "../fraseSecreta";
import criptografarSenha from "../auxiliares/criptografia";

export const loginUsuarios = (req:Request, res:Response) => {
    const {email, senha} = req.body;
    const usuarios: TUsuario[] = bancoDeDados.usuarios;
    const usuario = usuarios.find((u) => u.email === email && u.senha === criptografarSenha(senha));

    if(!usuario){
        return res.status(400).json({
            mensagem: "E-mail ou senha inválidos"
        });
    };
    const id = usuario.id;
    const comprovante = fraseSecreta + "/" + id;

    return res.status(200).json({comprovante});
};