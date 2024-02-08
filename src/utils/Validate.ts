import { User } from "../types/User"; 

type Error = {
    [key: string]: string;
};

export function Validate(data: User){
    const erros:Error = {}

    if(!data.name){
        erros["name"] = 'O nome é obrigatório'
    }

    return erros;

}