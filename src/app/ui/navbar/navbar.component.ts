import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Cart } from 'src/app/model/cart.model';
import { Produit } from 'src/app/model/produit.model';
import { User } from 'src/app/model/user.model';
import { ProduitService } from 'src/app/produit.service';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
@Input()
  term;
  @Input()
produits:Produit[];
  title= "Mes Produits";
  user:User;
  darkModeEnabled:boolean = false;
  addButton:string = "Publier une Annonce";
  carts:Cart[];
  constructor(
    public authService:AuthService,
     private router:Router,
     public userService: UserService,
     private produitService:ProduitService,
     private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getByUsername(this.authService.loggedUser).subscribe(data=>{
      this.carts=data;
          });

    this.produitService.listeProduits().subscribe((p) => {
      this.produits = p;
    });

  this.userService.getUserByUsername(this.authService.loggedUser).subscribe(u=>{
    this.user=u;
   
  })
  }

  logout(){
    this.authService.logout();
  }

  switch(){
    this.darkModeEnabled = ! this.darkModeEnabled;
  }

  viewProfile(){
    this.router.navigate(['/profile',this.user.user_id]).then(()=> {
      window.location.reload();
    });
  }

}
