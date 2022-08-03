import { Produit } from "./produit.model";
import { User } from "./user.model";

export class Cart {
    id : number;
     prix:number;
     dateCreation:Date;
     user:User;
     produit:Produit;

}