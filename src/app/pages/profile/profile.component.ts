import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Produit } from 'src/app/model/produit.model';
import { User } from 'src/app/model/user.model';
import { ProduitService } from 'src/app/produit.service';
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
  constructor(
    public userService: UserService,
    public authService: AuthService,
    private activatedRoute:ActivatedRoute,
    public produitService:ProduitService,
  ) { }

  ngOnInit(): void {
    this.userService.getUserById(this.activatedRoute.snapshot.params.user_id).
    subscribe( u =>{
      this.user=u;
  });
  

  this.produitService.listeProduitsByUser(this.activatedRoute.snapshot.params.user_id).subscribe(p=>{
    this.produits=p;
  })
  }
}
