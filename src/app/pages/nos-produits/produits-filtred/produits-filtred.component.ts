import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Produit } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/produit.service';

@Component({
  selector: 'app-produits-filtred',
  templateUrl: './produits-filtred.component.html',
  styleUrls: ['./produits-filtred.component.css']
})
export class ProduitsFiltredComponent implements OnInit {
  @Input()
  term;
  constructor(
   public authService:AuthService,
   public produitService: ProduitService,
   public router: Router

  ) { }

  @Input() 
  produits: Produit[];

  ngOnInit(): void {
  }

  supprimerProduit(p:Produit){

    let conf = confirm("Etes vous sur ?");
    if (conf) 
    this.produitService.supprimerProduit(p.idProduit).subscribe(()=>{
      console.log("produit supprimé");
    });
    this.router.navigate(['/']).then(()=> {
      window.location.reload();
    });
   }

}
