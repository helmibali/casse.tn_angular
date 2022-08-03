import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Cart } from 'src/app/model/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-liste-cart',
  templateUrl: './liste-cart.component.html',
  styleUrls: ['./liste-cart.component.css']
})
export class ListeCartComponent implements OnInit {
carts:Cart[];

prixAchat:number;
  constructor(private cartService:CartService,private authService:AuthService) { }

  ngOnInit(): void {
    this.cartService.getByUsername(this.authService.loggedUser).subscribe(data=>{
this.carts=data;
    })

    this.cartService.prixByUsername(this.authService.loggedUser).subscribe(data=>{
this.prixAchat=data;
    })
  }

  supprimerCart(c:Cart){

    // let conf = confirm("Etes vous sur ?");
    // if (conf) 
    this.cartService.supprimerCart(c.id).subscribe(()=>{
      console.log("produit supprimé");
      this.carts = this.carts.splice(c.id);
    });
  
   }


}
