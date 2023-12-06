import { specialite } from "../categories/specialite";


export class Membre {
    constructor(public id:number,public nom:string,public specialite:specialite,public numtel:number, public username_mb:string, public password_mb:string)
    {
    }
}
