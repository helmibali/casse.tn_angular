import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Cart } from 'src/app/model/cart.model';
import { Produit } from 'src/app/model/produit.model';
import { User } from 'src/app/model/user.model';
import { ProduitService } from 'src/app/produit.service';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  term;
user:User;
produits:Produit[];
pic: Boolean;
idCarts:string="idCarts";
idCartsCmd:string="idCartsCmd";
carts:Cart[];
cartsCmd:Cart[];
username:string;
  constructor(
    public userService: UserService,
    public authService: AuthService,
    private activatedRoute:ActivatedRoute,
    public produitService:ProduitService,
    private cartService:CartService,
  ) { }

  ngOnInit(): void {
    this.userService.getUserById(this.activatedRoute.snapshot.params.user_id).
    subscribe( u =>{
      this.user=u;
      this.username=u.username;  
      this.CartCmd(this.username);
      this.CartenCours(this.username);     
  });


  

   
  

  this.produitService.listeProduitsByUser(this.activatedRoute.snapshot.params.user_id).subscribe(p=>{
    this.produits=p;
  })
  }
CartenCours(username:string){
  this.cartService.getByUsernameEnCours(username).subscribe(data=>{
    this.carts=data;
    console.log(this.carts);
        });

}
CartCmd(username:string){
 this.cartService.getByUsernameEnCommade(username).subscribe(d=>{
    this.cartsCmd=d;
    console.log(this.cartsCmd);
     });      
    
}

}
