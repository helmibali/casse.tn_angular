import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article.model';
import { Produit } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/produit.service';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {
articles:Article[];
produits:Produit[];
p:number=1;

  constructor(public articleService:ArticleService, private produitService:ProduitService) { }

  ngOnInit(): void {
    this.articleService.listeArticles().subscribe(a=>{
      this.articles=a;
    })
    this.produitService.listeProduits().subscribe(a=>{
      this.produits=a;
    })
  }
 

// articlesBydate(): Article[] {
//   return this.articles
//     .sort(
//       (a, b) =>
//         new Date(b.dateCreation).getTime() - new Date(a.dateCreation).getTime()
//    );
// }
  

}
