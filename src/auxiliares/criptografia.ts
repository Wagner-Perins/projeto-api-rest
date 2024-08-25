export default function criptogafarSenha(senha:string): string {
 const criptografiaSenha =  'zz' + senha.split('').reverse().join('') + 'yy';

 
 return criptografiaSenha;
    
};

