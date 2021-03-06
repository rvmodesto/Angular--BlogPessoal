import { Postagem } from "./Postagem";

export class User{
    
    public id: number;
    public nome: string;
    public usuario: string;
    public senha: string;
    public dataNascimento: Date;
    public tipoUsuario: string;
    public foto: string;
    public postagem: Postagem[];
}