type TUsuario = {
  id: string;
  nome: string;
  email: string;
  senha: string;
};
export type TUsuarioIdOmitido = Omit<TUsuario, "senha">;

export default TUsuario;
