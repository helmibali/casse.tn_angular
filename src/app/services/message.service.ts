import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Message } from '../model/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public dataForm: FormGroup;
  constructor(
    private http: HttpClient,
    private authService : AuthService
  ) { }
  message(formData: FormData):Observable<Message>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Message>('http://localhost:8081/api/message',formData,{headers:httpHeaders});
  }
  getByAuteur(username:string):Observable<any>{
  const url = `${'http://localhost:8081/api/message-par-auteur'}/${username}`;
  return this.http.get(url);
  }
getByEmiteur(username:string):Observable<any>{
  const url = `${'http://localhost:8081/api/message-par-emiteur'}/${username}`;
  return this.http.get(url);
    }

    getByUser(username:string):Observable<any>{
      const url = `${'http://localhost:8081/api/message-par-user'}/${username}`;
      return this.http.get(url);
        }

        getDiscussion(username1:string,username2:string):Observable<any>{
          const url = `${'http://localhost:8081/api/discussion'}/${username1}/${username2}`;
          return this.http.get(url);
            }
    


          createComment(text:string,parentId:number,articleId:number):Observable<Message>{
            let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.post<Message>('http://localhost:8081/api/message',{
              message: text,
              auteur: this.authService.loggedUser,
            },{headers:httpHeaders})
          }
}
