import { User } from "../types/User"; 

type Error = {
    [key: string]: string;
};

export function Validate(data: User){
    const erros:Error = {}

    if(!data.name){
        erros["name"] = 'O nome é obrigatório'
    }

    if(!data.email){
        erros["email"] = 'O e-mail é obrigatório'
    }

    if(!data.agree){
        erros["agree"] = 'Você precisa aceitar os termos.'
    }

    return erros;

}