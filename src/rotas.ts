import { Router } from "express";
import { apresentacao,} from "./controladores/apresentacao";
import { precoMaximo } from "./controladores/filtragemEvento";


import { campoObrigatorio } from "./middlewares/validacaoBody";
import { emailExistente } from "./middlewares/validacaoEmail";
import { cadastroUsuario } from "./controladores/cadastroDeUsuario";

import { validacaoLogin } from "./middlewares/validacaoLogin";
import { loginUsuarios } from "./controladores/loginUsuario";
import { validacaoComprovante } from "./middlewares/validacaoComprovante";
import { controleCompraPost } from "./controladores/compras-post";
import { controleCompraGet } from "./controladores/compras-get";
import { controleCompraDelete } from "./controladores/compras-delete";





const rotas = Router();

rotas.get('/', apresentacao);
rotas.get('/eventos', precoMaximo);
rotas.get('/compras', controleCompraGet );

rotas.post('/usuarios', campoObrigatorio, emailExistente, cadastroUsuario);
rotas.post('/login', validacaoLogin, loginUsuarios)
rotas.post('/compras', validacaoComprovante, controleCompraPost);

rotas.delete('/compras/:id', controleCompraDelete);


export default rotas;
